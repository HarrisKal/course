// Singly Linked Lists are ordered data structures containing a head, 
// tail and length prop. Each element is called a node. Each node has
// a value and a pointer to the next node or null.

// Insertion: O(1)
// Removal: O(1) OR O(n)
// Search: O(n)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList {
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
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return this;
        else {
            let curr = this.head;
            if (curr === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                while (curr.next != this.tail) curr = curr.next;
                this.tail = curr;
                curr.next = null;
            }
            this.length--;
            return this;
        }
    }

    shift() {
        if (!this.head) return this;
        else {
            this.head = this.head.next;
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
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        else {
            let curr = this.head;
            let count = 0;
            while (index > count) {
                curr = curr.next;
                count++;
            }
            return curr;
        }
    }

    set(index, val) {
        let node = this.get(index);
        if (!node) {
            throw Error(`Cannot find index ${index}`);
        } else {
            node.val = val
            return node;
        }
    }

    insert(index, val) {
        if (index < 0) this.unshift(val);
        else if (index >= this.length) this.push(val);
        else {
            let newNode = new Node(val);
            let prev = this.get(index - 1);
            newNode.next = prev.next;
            prev.next = newNode
        }
        this.length++;
        return this;
    }

    remove(index) {
        if (index < 0 || index > this.length) return this;
        else {
            let prev = this.get(index - 1);
            if (prev.next == this.tail) {
                this.tail = prev;
                prev.next = null;
            } else {
                prev.next = this.get(index + 1);
            }
            this.length--;
            return this;
        }
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

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = null;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return this;
    }

    concat(list) {
        if (!(list instanceof SinglyLinkedList)) {
            throw Error('Argument must be a Singly Linkd List');
        } else {
            this.tail.next = list.head;
            this.tail = list.tail;
            this.length += list.length;
            return this;
        }
    }

    rotate(n) {
        if (n >= 0) {
            for (let i = 0; i < n; i++) {
                let curr = this.head;
                this.head = curr.next;
                curr.next = null;
                this.tail.next = curr;
                this.tail = curr;
            }
        } else {
            for (let i = 0; i > n; i--) {

                let secToLast = this.head;
                for (let j = 1; j < this.length - 1; j++) {
                    secToLast = secToLast.next;
                }

                let oldTail = this.tail;
                let oldHead = this.head;
                oldTail.next = oldHead;
                this.head = oldTail;
                secToLast.next = null;
                this.tail = secToLast;
            }
        }
        return this;
    }
}