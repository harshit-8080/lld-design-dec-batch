import { DoubleLinkedList, ListNode } from "./doubleLinkedList"

export interface ICache<K,V>{
    get(key: K): V
    put(key: K, value: V): void
    remove(key: K): void
    size(): number
    capacity(): number
}


export class LRUCache<K,V> implements ICache<K,V>{

    private maxCapacity: number;
    private doubleLinkedList: DoubleLinkedList<K,V>;
    private map: Map<K, ListNode<K,V>>;

    constructor(capacity:number){
        this.maxCapacity = capacity
        this.doubleLinkedList = new DoubleLinkedList()
        this.map = new Map()
    }


    get(key: K): V {
        const node = this.map.get(key)
        if(!node){
            return null
        }
        
        this.doubleLinkedList.makeMRU(node)
        return node.value
    }

    put(key: K, value: V): void {
        // 1st and check for existing node
        const existingNode = this.map.get(key)

        if(existingNode){
            existingNode.value = value
            this.doubleLinkedList.makeMRU(existingNode)
            return;
        }

        // 2nd and do you hit the capacity
        if(this.map.size >= this.maxCapacity){
            const lruNode = this.doubleLinkedList.removeLast()
            console.log("Least Recent Node is getting deleted ", lruNode.key, lruNode.value);
            this.map.delete(lruNode.key)
        }


        // 3rd and insert new node in the chain and map
        const newNode = new ListNode(key, value)
        this.map.set(key, newNode)
        this.doubleLinkedList.addToFront(newNode)
    }

    
    remove(key: K): void {
        const node = this.map.get(key)
        if(!node){
            return null
        }

        this.doubleLinkedList.removeNode(node)
        this.map.delete(node.key)
    }

    size(): number {
        return this.map.size
    }

    capacity(): number {
        return this.maxCapacity
    }

}


// class LFUCache<K,V> implements ICache<K,V>{
//     get(key: K): V {
//         throw new Error("Method not implemented.")
//     }
//     put(key: K, value: V): void {
//         throw new Error("Method not implemented.")
//     }
//     remove(key: K): void {
//         throw new Error("Method not implemented.")
//     }
//     size(): number {
//         throw new Error("Method not implemented.")
//     }
//     capacity(): number {
//         throw new Error("Method not implemented.")
//     }
    
// }



// class RedisCache<K,V> {
//     constructor(private cacheStrategy: ICache<K,V>){}

//     getEntry(key: K){
//         this.cacheStrategy.get(key)
//     }

// }