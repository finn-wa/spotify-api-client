export interface ICachingStrategy {
  getOrCreate<T>(
    cacheKey: string,
    createFunction: () => Promise<T & ICachable & object>,
    updateFunction?: (item: T) => Promise<T & ICachable & object>,
  ): Promise<T & ICachable>;

  get<T>(cacheKey: string): Promise<(T & ICachable) | null>;
  setCacheItem<T>(cacheKey: string, item: T & ICachable): void;
  remove(cacheKey: string): void;
}

export interface ICachable {
  expires?: number;
  expiresOnAccess?: boolean;
}

export interface ICacheStore {
  get(key: string): string | null;
  set(key: string, value: string): void;
  remove(key: string): void;
}
