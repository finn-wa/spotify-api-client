import type { SpotifyAuthConfig } from "../SpotifyAuthConfig";
import { type AccessToken } from "../token/AccessToken";

export default interface AuthStrategy {
  getOrCreateAccessToken(): Promise<AccessToken>;
  getAccessToken(): Promise<AccessToken | null>;
  removeAccessToken(): void;
}
