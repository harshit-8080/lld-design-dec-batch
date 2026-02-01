import { RateLimiteStore } from "../store/rate-limit-memory"
import { RateLimiterStrategy } from "./rateLimiterStrategy"

export class TokenBucket{
    constructor(
        public token: number, // available token
        public capacity: number,
        public refillTokenRatePerSec: number,
        public lastRefillTimeInMIlliSec: number // 3000 - 3sec
    ) {}
}

export class TokenBucketStrategy implements RateLimiterStrategy{
    constructor(
        private store: RateLimiteStore<TokenBucket>,
        private capacity: number,
        private refillRate: number
    ){}
    allowRequest(userId: string): boolean {

        const now = Date.now()
        let bucket = this.store.get(userId)

        // first ever request by user
        if(bucket == null){
            bucket = new TokenBucket(
                this.capacity - 1, // available token
                this.capacity, // capacity
                this.refillRate, // refill rate
                now
            )

            this.store.set(userId, bucket)
            return true
        }

        // time since last refill
        const secondsPassedSinceLateRefill = (now - bucket.lastRefillTimeInMIlliSec) / 1000
        const refillToken = secondsPassedSinceLateRefill * this.refillRate

        // take mini of capacity or available token + new refilledToken
        bucket.token = Math.min(this.capacity, bucket.token + refillToken)
        bucket.lastRefillTimeInMIlliSec = now

        if(bucket.token >= 1){
            bucket.token -=1
            this.store.set(userId, bucket)
            return true
        }

        return false
    }
}
