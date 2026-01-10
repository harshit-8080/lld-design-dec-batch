interface IProxyPattern {
    getUserData(query:string):string
}

// real object
export class APIService implements IProxyPattern{
    getUserData(query:string):string{
        return query + "___data" + "some data".repeat(5)
    }
}



export class CacheProxy implements IProxyPattern {

    private record:Map<string,string> = new Map();

    constructor(private apiService:APIService){}


    getUserData(query: string): string {
        
        if(this.record.has(query)){
            console.log("cache found, returning from cache");
            return this.record.get(query)
        }

        
        // startime

        /// db query

        // end time

        /// performace endTime- startTme

        console.log("cache miss fetching from api service");
        const data = this.apiService.getUserData(query)
        this.record.set(query, data) // set in the cache
        return data
    }
    
}