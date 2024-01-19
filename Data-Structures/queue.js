// Stacks are abstruct data collections following this principle:
// The last el added is the last el removed from the stack.
// Or: last in last out. (FIFO)

// Insertion: O(1)
// Removal: O(1)
// Search: O(n)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.oldest = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        const newNode = new Node(val);
        if (!this.oldest) {
            this.oldest = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return newNode;
    }

    dequeue() {
        if (!this.oldest) return null;
        let poped = this.oldest;
        if (this.oldest == this.last) {
            this.oldest = this.last = null;
        } else {
            this.oldest = this.oldest.next;
        }
        this.size--;
        return poped;
    }
}

module.exports = Queue;
