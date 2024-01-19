// Stacks are abstruct data collections following this principle:
// The last el added is the first el removed from the stack.
// Or: Last in first out. (LIFO)

// Insertion: O(1)
// Removal: O(1)
// Search: O(n)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.newest = null;
        this.first = null;
        this.size = 0;
    }

    add(val) {
        const newNode = new Node(val);
        if (!this.newest) {
            this.newest = newNode;
            this.first = newNode;
        } else {
            newNode.next = this.newest;
            this.newest = newNode;
        }
        this.size++;
        return newNode;
    }

    pop() {
        if (!this.newest) return null;
        let poped = this.newest;
        if (this.newest == this.first) {
            this.newest = this.first = null;
        } else {
            this.newest = this.newest.next;
        }
        this.size--;
        return poped;
    }
}