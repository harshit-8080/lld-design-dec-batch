interface IAccount{
    createAccount():void;
    deleteAccount():void;
    updateAccount():void;
    viewAanalytics():void;
    manageSubscriptions():void;
    manageBilling():void;
}


class UserAccount implements IAccount{
    createAccount(): void {
        throw new Error("Method not implemented.");
    }
    deleteAccount(): void {
        throw new Error("Method not implemented.");
    }
    updateAccount(): void {
        throw new Error("Method not implemented.");
    }
    viewAanalytics(): void {
        throw new Error("Method not implemented.");
    }
    manageSubscriptions(): void {
        throw new Error("Method not implemented.");
    }
    manageBilling(): void {
        throw new Error("Method not implemented.");
    }
}


interface databaseOperations{
    createRecord():void;
    readRecord():void;
    updateRecord():void;
    deleteRecord():void;

}

interface cacheOperations{
    setCache():void;
    getCache():void;
    deleteCache():void;
}


class MySQLDatabase implements databaseOperations{
    createRecord(): void {
        console.log("")
    }
    readRecord(): void {
        console.log("")
    }
    updateRecord(): void {
        console.log("")
    }
    deleteRecord(): void {
        console.log("")
    }
}

class RedisDatabase implements cacheOperations{
    setCache(): void {
        console.log("")
    }
    getCache(): void {
        console.log("")
    }
    deleteCache(): void {
        console.log("")
    }
}