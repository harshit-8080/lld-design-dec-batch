import { MemoryStore } from "../store/rate-limit-memory";
import { RateLimiterStrategy } from "./rateLimiterStrategy";


// In Fixed Window, time is divided into chunks:
// Limit = 5 requests
// Window = 60 seconds
export class FixedWindowCounter {
  constructor(
    public count: number,
    public windowStart: number
  ) {}
}



export class FixedWindowStrategy implements RateLimiterStrategy {
  constructor(
    private store: MemoryStore<FixedWindowCounter>, // where state is stored
    private limit: number, // max requests allowed
    private windowSizeMs: number // length of one window
  ) {}

  allowRequest(key: string): boolean {
    const now = Date.now(); // current timestamp.

    let counter = this.store.get(key)

    if (!counter) { // first request ever
      counter = new FixedWindowCounter(1, now);
      this.store.set(key, counter);
      return true;
      // no record exists creare a new window allow first request.
    }

    if (now - counter.windowStart > this.windowSizeMs) {
        // reset count and window allow.
      counter.count = 1;
      counter.windowStart = now;
      this.store.set(key, counter);
      return true;
    }

    if (counter.count < this.limit) {
      counter.count++;
      this.store.set(key, counter);
      return true;
    }

    return false;
  }
}
