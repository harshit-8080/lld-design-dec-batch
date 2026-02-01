import { TokenBucket } from "../strategy/tokenBucketStrategy";

export interface RateLimiteStore<T> {
  get(userId: string): T;
  set(userId: string, bucket: T): void;
}

export class MemoryStore<T> implements RateLimiteStore<T> {
    private data: Map<string, T> = new Map()
    
    get(userId: string): T {
        return this.data.get(userId)
    }
    set(userId: string, bucket: T): void {
       this.data.set(userId, bucket)
    }  
}