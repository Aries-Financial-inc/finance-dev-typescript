/** Errors from the hand-maintained WebSocket extension. */
export class WebSocketError extends Error {
  constructor(message: string) { super(message); this.name = new.target.name; }
}
export class WebSocketConfigurationError extends WebSocketError {}
export class WebSocketAuthenticationError extends WebSocketError {}
export class WebSocketConnectionError extends WebSocketError {}
export class WebSocketConnectionStateError extends WebSocketConnectionError {}
export class WebSocketProtocolError extends WebSocketError {}
export class WebSocketBackpressureError extends WebSocketError {}
export class WebSocketRequestError extends WebSocketError {
  constructor(message: string, readonly status: number | undefined,
    readonly code: unknown, readonly requestId: string) { super(message); }
}
