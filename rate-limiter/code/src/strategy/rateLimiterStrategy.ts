export interface RateLimiterStrategy {
    allowRequest(userId: string): boolean
}


