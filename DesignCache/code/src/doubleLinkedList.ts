export class ListNode<K,V>{
    constructor(
        public key: K,
        public value: V,
        public prev: ListNode<K,V> = null,
        public next: ListNode<K,V> = null
    ){}
}


export class DoubleLinkedList<K,V>{
    private head: ListNode<K,V>
    private tail: ListNode<K,V>

    constructor(){
        this.head = new ListNode<K,V>(null, null)
        this.tail = new ListNode<K,V>(null, null)

        this.head.next = this.tail
        this.tail.prev = this.head
    }


    addToFront(node: ListNode<K,V>){

        node.prev = this.head
        node.next = this.head.next

        if(this.head.next.prev){
            // this.tail.prev = node
            this.head.next.prev = node
        }
        this.head.next = node
    }

    removeNode(node:ListNode<K,V>):void{
        node.next.prev = node.prev
        node.prev.next = node.next

        return;
    }

    makeMRU(node: ListNode<K,V>){
        this.removeNode(node)
        this.addToFront(node)
    }

    removeLast():ListNode<K,V>{
        const lastNode = this.tail.prev
        if(lastNode == this.head){
            return
        }
        this.removeNode(lastNode)
        return lastNode
    }
}