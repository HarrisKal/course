// Doubly Linked Lists are ordered data structures containing a head, 
// tail and length prop. Each element is called a node. Each node has 
// a value and two pointers: one Anext node and one Aprevious

// Insertion: O(1)
// Removal: O(1)
// Search: O(n/2)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return this;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            const oldTail = this.tail;
            oldTail.prev = null
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return this;
    }

    shift() {
        if (!this.head) return this;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null
            this.length--;
        }
        return this;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        if (index <= this.length / 2) {
            let curr = this.head;
            let count = 0;
            while (index > count) {
                curr = curr.next;
                count++;
            }
        } else {
            let curr = this.tail;
            let count = this.length - 1;
            while (index < count) {
                curr = curr.prev;
                count--;
            }
            return curr;
        }
    }

    set(index, val) {
        let node = this.get(index);
        if (!node) throw Error(`Cannot find index ${index}`);
        else {
            node.val = val
            return node;
        }
    }

    insert(index, val) {
        if (index <= 0) this.unshift(val);
        else if (index >= this.length) this.push(val);
        else {
            let newNode = new Node(val);
            let prev = this.get(index - 1);
            newNode.next = prev.next;
            prev.next = newNode;
            newNode.prev = prev;
            if (newNode.next) newNode.next.prev = newNode;
        }
        this.length++;
        return this;
    }

    remove(index) {
        if (index < 0 || index > this.length) return this;
        if (index == 0) return this.shift();
        if (index == this.length - 1) return this.pop();
        let removed = this.get(index);
        removed.next.prev = removed.prev;
        removed.prev.next = removed.next;
        this.length--;
        return this;
    }

    toArray() {
        let arr = [];
        let curr = this.head;
        while (curr) {
            arr.push(curr.val);
            curr = curr.next;
        }
        return arr;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return this;
    }

    concat(list) {
        if (!(list instanceof DoublyLinkedList)) {
            throw TypeError('Argument must be a Doubly Linkd List');
        } else {
            this.tail.next = list.head;
            list.head.prev = this.tail;
            this.tail = list.tail;
            this.length += list.length;
            return this;
        }
    }
}
