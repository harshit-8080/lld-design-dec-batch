export class EagerSingleton {
    private static instance: EagerSingleton = new EagerSingleton()

    private constructor() {
        console.log("eager singleton example");
    }

    static getInstance():EagerSingleton {
        return EagerSingleton.instance
    }
}
