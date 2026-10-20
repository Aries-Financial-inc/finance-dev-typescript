import type { TokenProvider } from './auth.js';
import { decodeFrame, encodeMessage, isObject } from './codec.js';
import { WebSocketConfig } from './config.js';
import { WebSocketAuthenticationError, WebSocketBackpressureError, WebSocketConnectionError,
  WebSocketConnectionStateError, WebSocketProtocolError, WebSocketRequestError } from './errors.js';
import type { InboundMessage, WireMessage, WireObject } from './models.js';
import { applyUnsubscribe, subscriptionKey } from './subscriptions.js';

export type ConnectionState = 'DISCONNECTED' | 'CONNECTING' | 'AUTHENTICATING' | 'READY' | 'RECONNECTING' | 'CLOSING' | 'CLOSED' | 'FAILED';
export type WebSocketFactory = (url: string) => WebSocket;
class ReplyTimeout extends WebSocketConnectionError {}

type Pending = { resolve: (message: WireMessage) => void; reject: (error: Error) => void };
type Waiter = { resolve: (result: IteratorResult<InboundMessage>) => void; reject: (error: Error) => void };

/** One reader routes correlated replies and feeds a bounded async iterator. */
export class WebSocketConnection implements AsyncIterableIterator<InboundMessage> {
  private currentState: ConnectionState = 'DISCONNECTED';
  private socket: WebSocket | undefined;
  private stopped = false;
  private terminal: Error | undefined;
  private terminalReported = false;
  private readonly pending = new Map<string, Pending>();
  private readonly events: InboundMessage[] = [];
  private readonly waiters: Waiter[] = [];
  private readonly active = new Map<string, WireMessage>();
  private heartbeat: ReturnType<typeof setTimeout> | undefined;
  private recovery: Promise<void> | undefined;
  private refreshing = false;
  private authId: string | undefined;
  private delayTimer: ReturnType<typeof setTimeout> | undefined;
  private cancelDelay: (() => void) | undefined;
  private openingReject: ((error: Error) => void) | undefined;
  private closePromise: Promise<void> | undefined;

  constructor(readonly url: string, private readonly provider: TokenProvider,
    readonly config = new WebSocketConfig(), private readonly factory: WebSocketFactory = url => {
      if (!globalThis.WebSocket) throw new WebSocketConnectionError('Provide webSocketFactory on runtimes without native WebSocket (Node.js 22+ or a browser).');
      return new globalThis.WebSocket(url);
    }) {}

  get state(): ConnectionState { return this.currentState; }
  private id(prefix: string): string { return `${prefix}-${globalThis.crypto.randomUUID()}`; }
  private requireReady(): void {
    if (this.state !== 'READY') throw new WebSocketConnectionStateError('WebSocket must be authenticated and READY before this operation');
  }
  async connect(): Promise<this> {
    if (this.state !== 'DISCONNECTED') throw new WebSocketConnectionStateError('Connection has already been opened');
    try { await this.open(); return this; }
    catch (error) {
      const failure = error instanceof Error ? error : new WebSocketConnectionError('Unable to connect websocket');
      this.fail(failure); throw failure;
    }
  }
  private async open(): Promise<void> {
    if (this.stopped) throw new WebSocketConnectionStateError('Connection is closed');
    this.currentState = 'CONNECTING';
    let socket: WebSocket;
    try { socket = this.factory(this.url); }
    catch (error) {
      if (error instanceof WebSocketConnectionError) throw error;
      throw new WebSocketConnectionError('Unable to open websocket');
    }
    this.socket = socket;
    socket.binaryType = 'arraybuffer';
    await new Promise<void>((resolve, reject) => {
      const finish = (error?: Error) => {
        clearTimeout(timer); this.openingReject = undefined;
        socket.removeEventListener('open', opened);
        socket.removeEventListener('error', failed);
        socket.removeEventListener('close', failed);
        if (error) reject(error); else resolve();
      };
      const opened = () => finish();
      const failed = () => finish(new WebSocketConnectionError('Unable to open websocket'));
      const timer = setTimeout(() => finish(new WebSocketConnectionError('WebSocket connection timed out')), this.config.connectTimeout);
      this.openingReject = error => finish(error);
      socket.addEventListener('open', opened, { once: true });
      socket.addEventListener('error', failed, { once: true });
      socket.addEventListener('close', failed, { once: true });
    });
    if (this.stopped || this.socket !== socket) throw new WebSocketConnectionStateError('Connection is closed');
    this.currentState = 'AUTHENTICATING';
    socket.addEventListener('message', event => {
      if (this.socket !== socket || this.stopped) return;
      try {
        const data: unknown = event.data;
        if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) throw new WebSocketProtocolError('Unsupported websocket frame');
        const size = typeof data === 'string' ? new TextEncoder().encode(data).length : data.byteLength;
        if (size > this.config.maxMessageSize) throw new WebSocketProtocolError('WebSocket frame exceeds maxMessageSize');
        for (const message of decodeFrame(data)) {
          if (this.stopped || this.socket !== socket) break;
          this.route(message);
        }
      } catch (error) { this.fail(error instanceof Error ? error : new WebSocketProtocolError('Invalid websocket frame')); }
    });
    socket.addEventListener('close', () => {
      if (this.socket !== socket || this.stopped) return;
      this.disconnected(new WebSocketConnectionError('WebSocket disconnected'));
    });
    socket.addEventListener('error', () => {
      if (this.socket === socket && !this.stopped) this.disconnected(new WebSocketConnectionError('WebSocket transport error'));
    });
    await this.authenticate(socket);
    if (this.stopped || this.socket !== socket) throw new WebSocketConnectionStateError('Connection is closed');
    this.currentState = 'READY';
    this.scheduleHeartbeat();
  }
  private async authenticate(socket: WebSocket): Promise<void> {
    const id = this.id('auth'); this.authId = id;
    try {
      const response = await this.awaitReply(id, this.config.authTimeout, async () => {
        let token: string;
        try { token = await this.provider.getToken(); }
        catch { throw new WebSocketAuthenticationError('Unable to obtain websocket access token'); }
        if (this.stopped || this.socket !== socket || !this.pending.has(id)) return;
        if (typeof token !== 'string' || !token.trim()) throw new WebSocketAuthenticationError('Access token must be a non-empty string');
        this.send({ type: 'request', id, payload: { method: 'POST', path: '/auth', body: { token } } });
      });
      if (!isObject(response.payload) || response.payload['action'] !== 'authSuccess') throw new WebSocketAuthenticationError('WebSocket authentication was rejected');
    } catch (error) {
      if (error instanceof WebSocketProtocolError || (error instanceof WebSocketConnectionError && !(error instanceof ReplyTimeout))) throw error;
      throw new WebSocketAuthenticationError('WebSocket authentication failed or timed out');
    }
  }
  private send(message: WireMessage): void {
    if (!this.socket || this.socket.readyState !== 1) throw new WebSocketConnectionError('WebSocket is not open');
    try { this.socket.send(encodeMessage(message)); }
    catch { throw new WebSocketConnectionError('Unable to send websocket message'); }
  }
  private awaitReply(id: string, timeout: number, send: () => void | Promise<void>): Promise<WireMessage> {
    if (this.pending.has(id)) return Promise.reject(new WebSocketConnectionStateError('Duplicate request ID'));
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(id); reject(new ReplyTimeout('WebSocket request timed out'));
      }, timeout);
      this.pending.set(id, {
        resolve: message => { clearTimeout(timer); this.pending.delete(id); resolve(message); },
        reject: error => { clearTimeout(timer); this.pending.delete(id); reject(error); },
      });
      Promise.resolve().then(send).catch(error => {
        const entry = this.pending.get(id);
        entry?.reject(error instanceof Error ? error : new WebSocketConnectionError('Unable to send websocket message'));
      });
    });
  }
  private route(message: InboundMessage): void {
    if ('original' in message && !('type' in message)) { this.put(message); return; }
    const wire = message as WireMessage;
    const payload = isObject(wire.payload) ? wire.payload : {};
    const action = payload['action'];
    if (action === 'authRequired' || action === 'authTimeout') { this.fail(new WebSocketAuthenticationError('WebSocket authentication is required or expired')); return; }
    if (action === 'authExpired') { this.disconnected(new WebSocketConnectionError('WebSocket session expired')); return; }
    if (action === 'refreshAuth') {
      if (!this.refreshing && this.socket) {
        this.refreshing = true;
        const socket = this.socket;
        void this.authenticate(socket).catch(error => {
          if (this.socket === socket) this.fail(error);
        }).finally(() => { this.refreshing = false; });
      }
      return;
    }
    if (wire.type === 'ping') { this.send({ type: 'pong', ...(wire.id ? { id: wire.id } : {}) }); return; }
    const id = wire.id ?? (typeof payload['id'] === 'string' ? payload['id'] : action === 'authSuccess' ? this.authId : undefined);
    const pending = id ? this.pending.get(id) : undefined;
    if (pending && (['response', 'subscribed', 'pong'].includes(wire.type) || action === 'authSuccess' || action === 'error')) {
      if (payload['error'] || action === 'error' || (typeof payload['status'] === 'number' && payload['status'] >= 400)) {
        pending.reject(id === this.authId ? new WebSocketAuthenticationError('WebSocket authentication was rejected') :
          new WebSocketRequestError(String(payload['message'] ?? payload['error'] ?? 'Request failed'),
            typeof payload['status'] === 'number' ? payload['status'] : undefined, payload['code'], id!));
      } else pending.resolve(wire);
    } else this.put(message);
  }
  private put(message: InboundMessage): void {
    const waiter = this.waiters.shift();
    if (waiter) { waiter.resolve({ value: message, done: false }); return; }
    if (this.events.length >= this.config.incomingQueueSize) {
      this.fail(new WebSocketBackpressureError('Incoming websocket queue is full; drain events faster or increase incomingQueueSize')); return;
    }
    this.events.push(message);
  }
  private rejectPending(error: Error): void { for (const pending of this.pending.values()) pending.reject(error); }
  private fail(error: Error): void {
    if (this.stopped) return;
    this.terminal = error; this.stopped = true; this.currentState = 'FAILED';
    this.stopTimers(); this.rejectPending(error); this.openingReject?.(error);
    this.retireSocket();
    for (const waiter of this.waiters.splice(0)) { this.terminalReported = true; waiter.reject(error); }
  }
  private retireSocket(): void {
    const socket = this.socket; this.socket = undefined;
    if (socket && socket.readyState < 2) { try { socket.close(); } catch { /* Already closed. */ } }
  }
  private disconnected(error: Error): void {
    clearTimeout(this.heartbeat); this.rejectPending(error); this.retireSocket();
    if (this.state !== 'READY') return; // The active open/recovery attempt owns its failure.
    if (!this.config.reconnect) { this.fail(error); return; }
    this.currentState = 'RECONNECTING';
    if (!this.recovery) this.recovery = this.recover().catch(failure => this.fail(failure)).finally(() => { this.recovery = undefined; });
  }
  private async recover(): Promise<void> {
    for (let attempt = 0; attempt < 8 && !this.stopped; attempt++) {
      const delay = Math.min(this.config.reconnectMaxDelay, this.config.reconnectInitialDelay * 2 ** attempt) *
        (1 + (Math.random() * 2 - 1) * this.config.reconnectJitter);
      await new Promise<void>(resolve => { this.cancelDelay = resolve; this.delayTimer = setTimeout(resolve, delay); });
      this.cancelDelay = undefined;
      if (this.stopped) return;
      try {
        await this.open();
        if (this.config.replaySubscriptions) for (const message of this.active.values()) this.send({ ...message, id: this.id('subscribe') });
        return;
      } catch (error) {
        this.retireSocket();
        if (this.stopped) return;
        if (!(error instanceof WebSocketConnectionError) || error instanceof WebSocketConnectionStateError) throw error;
        this.currentState = 'RECONNECTING';
      }
    }
    if (!this.stopped) throw new WebSocketConnectionError('WebSocket reconnect attempts exhausted');
  }
  private scheduleHeartbeat(): void {
    clearTimeout(this.heartbeat);
    this.heartbeat = setTimeout(() => {
      if (this.stopped || this.state !== 'READY') return;
      const id = this.id('ping');
      void this.awaitReply(id, this.config.pongTimeout, () => this.send({ type: 'ping', id }))
        .then(() => { if (!this.stopped && this.state === 'READY') this.scheduleHeartbeat(); })
        .catch(() => { if (!this.stopped) this.disconnected(new WebSocketConnectionError('WebSocket pong timed out')); });
    }, this.config.pingInterval);
  }
  private stopTimers(): void {
    clearTimeout(this.heartbeat); clearTimeout(this.delayTimer); this.cancelDelay?.(); this.cancelDelay = undefined;
  }
  async exchange(message: WireMessage, timeout = this.config.requestTimeout): Promise<WireMessage> {
    this.requireReady();
    if (!Number.isFinite(timeout) || timeout <= 0) throw new WebSocketConnectionStateError('Request timeout must be positive');
    const wire = { ...message, id: message.id ?? this.id('request') };
    return this.awaitReply(wire.id, timeout, () => this.send(wire));
  }
  request(method: string, path: string, options: { query?: WireObject; body?: unknown; timeout?: number } = {}): Promise<WireMessage> {
    const { timeout, ...extra } = options;
    return this.exchange({ type: 'request', payload: { method, path, ...extra } }, timeout);
  }
  async sendMessage(message: WireMessage): Promise<string | undefined> {
    this.requireReady();
    const key = subscriptionKey(message);
    if (message.type === 'subscribe' && this.active.has(key)) return this.active.get(key)!.id;
    this.send(message);
    if (message.type === 'subscribe') this.active.set(key, structuredClone(message));
    if (message.type === 'unsubscribe') applyUnsubscribe(this.active, message);
    return message.id;
  }
  protected async subscribePayload(payload: unknown, acknowledged = false): Promise<WireMessage | string> {
    const message = { type: 'subscribe', id: this.id('subscribe'), payload };
    if (acknowledged) {
      const response = await this.exchange(message);
      this.active.set(subscriptionKey(message), structuredClone(message));
      return response;
    }
    return (await this.sendMessage(message))!;
  }
  protected async unsubscribePayload(payload: unknown, acknowledged = false): Promise<WireMessage | string> {
    const message = { type: 'unsubscribe', id: this.id('unsubscribe'), payload };
    if (acknowledged) {
      const response = await this.exchange(message); applyUnsubscribe(this.active, message); return response;
    }
    return (await this.sendMessage(message))!;
  }
  [Symbol.asyncIterator](): AsyncIterableIterator<InboundMessage> { return this; }
  next(): Promise<IteratorResult<InboundMessage>> {
    const event = this.events.shift();
    if (event) return Promise.resolve({ value: event, done: false });
    if (this.terminal && !this.terminalReported) { this.terminalReported = true; return Promise.reject(this.terminal); }
    if (this.stopped) return Promise.resolve({ value: undefined, done: true });
    return new Promise((resolve, reject) => this.waiters.push({ resolve, reject }));
  }
  async getEvent(): Promise<InboundMessage | undefined> { return (await this.next()).value; }
  async return(): Promise<IteratorResult<InboundMessage>> { await this.close(); return { value: undefined, done: true }; }
  close(): Promise<void> { return this.closePromise ??= this.closeSocket(); }
  private async closeSocket(): Promise<void> {
    this.stopped = true; this.currentState = 'CLOSING'; this.stopTimers();
    const error = new WebSocketConnectionStateError('Connection is closed');
    this.rejectPending(error); this.openingReject?.(error);
    for (const waiter of this.waiters.splice(0)) waiter.resolve({ value: undefined, done: true });
    const socket = this.socket; this.socket = undefined;
    if (socket && socket.readyState < 3) {
      await new Promise<void>(resolve => {
        const finish = () => { clearTimeout(timer); socket.removeEventListener('close', finish); resolve(); };
        const timer = setTimeout(finish, this.config.closeTimeout);
        socket.addEventListener('close', finish, { once: true });
        try { socket.close(); } catch { finish(); }
      });
    }
    this.currentState = 'CLOSED';
  }
}
