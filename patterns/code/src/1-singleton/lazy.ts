export class Singleton {
    private static instance: Singleton

    private constructor() {
         console.log("lazyyy singleton example");
    }

    static getInstance():Singleton {
        if(Singleton.instance == null){
            Singleton.instance = new Singleton()
        }
        return Singleton.instance
    }
}
