import { RateLimiterStrategy } from "./strategy/rateLimiterStrategy";

export class RateLimiter {
    constructor(
        private stratgey: RateLimiterStrategy
    ){}

    allow(userId: string): boolean{
       const status = this.stratgey.allowRequest(userId)
       if(status){
        console.log("allowing ... the request");
       }else{
        console.log("rejecting ... too many requests");
       }

       return status
    }
}