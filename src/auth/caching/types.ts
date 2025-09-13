export interface Cachable {
  expires?: number;
  expiresOnAccess?: boolean;
}

export interface CacheStore {
  get(key: string): string | null;
  set(key: string, value: string): void;
  remove(key: string): void;
}
