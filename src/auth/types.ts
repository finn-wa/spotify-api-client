import type { ICachingStrategy } from "../caching/types";

export interface AccessToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  expires?: number;
}

export interface SdkConfiguration {
  redirectionStrategy: IRedirectionStrategy;
  cachingStrategy: ICachingStrategy;
}

export interface IRedirectionStrategy {
  redirect(targetUrl: string | URL): Promise<void>;
  onReturnFromRedirect(): Promise<void>;
}
