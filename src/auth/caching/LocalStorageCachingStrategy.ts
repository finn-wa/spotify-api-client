import GenericCache from "./GenericCache.js";
import type { CacheStore } from "./types.js";

export default class LocalStorageCachingStrategy extends GenericCache {
  constructor() {
    super(new LocalStorageCacheStore());
  }
}

class LocalStorageCacheStore implements CacheStore {
  public get(key: string): string | null {
    return localStorage.getItem(key);
  }

  public set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }
}
