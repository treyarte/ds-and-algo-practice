class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const node = new Node(val);
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        } else {
            const prevNode = this.tail;
            prevNode.next = node;
            this.tail = node; 
        }
    }
}

export default LinkedList;