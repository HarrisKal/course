// A Binary Heap is very similar to a binary search tree, 
// in that each node can have up ot two children.
// In a MaxBinaryHeap, parents are always larger than children.
// In a MinBinaryHeap, parents are always smaller than children.
// In both, the left child gets added first.

// Rel of parent-children in heaps represented in an array:
// indexOf(LeftChild) = 2*i + 1, indexOf(RightChild) = 2*i + 2
// indexOf(Parent) = Math.floor( (i-1)/2 )

// Insertion: O(log n)
// Deletion: O(log n)
// Searching: O(n)

Array.prototype.swap = function (i1, i2) {
    // Take two indexes of an array and swap them.
    [this[i1], this[i2]] = [this[i2], this[i1]]
}

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        let parent = Math.floor((this.values.indexOf(val) - 1) / 2);

        while (val >= this.values[parent]) {
            this.values.swap(this.values.indexOf(val), parent);
            parent = Math.floor((this.values.indexOf(val) - 1) / 2);
        }
        return this;
    }

    extractMax() {
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
                    if (leftC > element) swap = leftCi;
                }
                if (rightCi < length) {
                    rightC = this.values[rightCi];
                    if (
                        (swap === null && rightC > element) ||
                        (swap !== null && rightC > leftC)
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