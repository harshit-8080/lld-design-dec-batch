
import { RateLimiter } from "./src/rateLimiter";
import { MemoryStore } from "./src/store/rate-limit-memory";
import { TokenBucket, TokenBucketStrategy } from "./src/strategy/tokenBucketStrategy";

const dataStoreTokenBucket = new MemoryStore<TokenBucket>()

// const dataStoreTokenFixedWindowCounter = new MemoryStore<FixesWindowCounter>()

const tokenStrategy = new TokenBucketStrategy(dataStoreTokenBucket, 5, 2)


const rateLimiter = new RateLimiter(tokenStrategy)

const harshitUserId = "harshit123"

rateLimiter.allow(harshitUserId)
rateLimiter.allow(harshitUserId)
rateLimiter.allow(harshitUserId)
rateLimiter.allow(harshitUserId)
rateLimiter.allow(harshitUserId)

rateLimiter.allow(harshitUserId)
rateLimiter.allow(harshitUserId)
rateLimiter.allow(harshitUserId)
rateLimiter.allow(harshitUserId)
rateLimiter.allow(harshitUserId)


setTimeout(()=>{
    rateLimiter.allow(harshitUserId)
    rateLimiter.allow(harshitUserId)
    rateLimiter.allow(harshitUserId)
    rateLimiter.allow(harshitUserId)
    rateLimiter.allow(harshitUserId)

    rateLimiter.allow(harshitUserId)
    rateLimiter.allow(harshitUserId)
    rateLimiter.allow(harshitUserId)
    rateLimiter.allow(harshitUserId)
    rateLimiter.allow(harshitUserId)
}, 3000)