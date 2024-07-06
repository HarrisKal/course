// A priority queue is a data structure where each element has a priority.
// Elements with higher priorities are served before ones with lower.
// A lower number usually means a higher priority.

// Insertion: O(log n)
// Deletion: O(log n)
// Searching: O(n)

class Node {
    constructor(val, priority) {
        this.val = val;
        this.pr = priority;
    }
}

Array.prototype.swap = function (i1, i2) {
    // Take two indexes of an array and swap them.
    [this[i1], this[i2]] = [this[i2], this[i1]]
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        const node = new Node(val, priority);
        this.values.push(node);

        let parent = Math.floor((this.values.indexOf(node) - 1) / 2);
        if (!this.values[parent]) return this;

        while (node.pr <= this.values[parent].pr) {
            this.values.swap(this.values.indexOf(node), parent);
            parent = Math.floor((this.values.indexOf(node) - 1) / 2);
            if (!this.values[parent]) return this;
        }
        return this;
    }

    dequeue() {
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end
            let idx = 0;
            const length = this.values.length;
            const element = this.values[0];

            while (true) {
                let leftCi = 2 * idx + 1
                let rightCi = 2 * idx + 2
                let leftC, rightC;
                let swap = null;

                if (leftCi < length) {
                    leftC = this.values[leftCi];
                    if (leftC.pr < element.pr) swap = leftCi;
                }
                if (rightCi < length) {
                    rightC = this.values[rightCi];
                    if (
                        (swap === null && rightC.pr < element.pr) ||
                        (swap !== null && rightC.pr < leftC.pr)
                    ) swap = rightCi;
                }

                if (swap === null) break;
                this.values[idx] = this.values[swap]
                this.values[swap] = element;
                idx = swap;
            }
        }
        return this;
    }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue('a', 1).enqueue('b', 5).enqueue('c', 2).enqueue('d', 4).dequeue()
console.log(priorityQueue)