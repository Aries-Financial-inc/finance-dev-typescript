import { WebSocketAuthenticationError } from './errors.js';

export interface TokenProvider { getToken(): string | Promise<string>; }
export class StaticTokenProvider implements TokenProvider {
  constructor(private readonly token: string) {}
  getToken(): string { return this.token; }
}
export class CallbackTokenProvider implements TokenProvider {
  constructor(private readonly callback: () => string | Promise<string>) {}
  getToken(): string | Promise<string> { return this.callback(); }
}

/** Caches client-credentials tokens and coalesces concurrent refreshes. */
export class ClientCredentialsTokenProvider implements TokenProvider {
  private token: string | undefined;
  private expires = 0;
  private pending: Promise<string> | undefined;
  constructor(private readonly tokenURL: string, private readonly clientID: string,
    private readonly clientSecret: string, private readonly fetcher: typeof fetch = globalThis.fetch) {}

  getToken(): Promise<string> {
    if (this.token && Date.now() < this.expires - 30_000) return Promise.resolve(this.token);
    return this.pending ??= this.load().finally(() => { this.pending = undefined; });
  }
  private async load(): Promise<string> {
    try {
      const response = await this.fetcher(this.tokenURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ grant_type: 'client_credentials',
          client_id: this.clientID, client_secret: this.clientSecret }),
        signal: AbortSignal.timeout(15_000),
      });
      if (!response.ok) throw new WebSocketAuthenticationError(
        'Client credentials were rejected. Partner/business clients should supply an Authorization Code or PKCE token.');
      const data = await response.json() as { access_token?: unknown; expires_in?: unknown };
      if (typeof data.access_token !== 'string' || !data.access_token.trim()) {
        throw new WebSocketAuthenticationError('Invalid access token response');
      }
      const expiresIn = Number(data.expires_in ?? 3600);
      if (!Number.isFinite(expiresIn) || expiresIn <= 0) throw new WebSocketAuthenticationError('Invalid token expiry');
      this.token = data.access_token;
      this.expires = Date.now() + expiresIn * 1000;
      return this.token;
    } catch (error) {
      if (error instanceof WebSocketAuthenticationError) throw error;
      throw new WebSocketAuthenticationError('Unable to obtain websocket access token');
    }
  }
}
