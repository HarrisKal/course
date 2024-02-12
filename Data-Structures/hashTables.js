// Hash Tables are used to store non-ordered key-value pairs.
// They have a constant time complexity for all operations.

// A hash function is one that converts keys to array indeces.
// A good hash function should be fast and produce evenly distributed results.
// They must be deterministic; for each input, there will be one output
// However, no matter what, there will be collisions between inputs,
// in other words, two keys may correspond to the same output

// In order to minimize collisions, there are two ways.
// Separate Chaining: Store the items of same hash on the same subarray.
// Linear Probing: When we find a collision, search for the next empty spot.

// Time complexity:
// Insert: O(1)
// Delete: O(1)
// Access: O(1)

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key = '') {
        let total = 0;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let val = key[i].charCodeAt(0) - 96;
            total = (total * 31 + val) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value])
        return index;
    }

    get(key) {
        let i = this._hash(key);
        if (!this.keyMap[i]) return undefined;

        for (let pair of this.keyMap[i]) {
            if (pair[0] === key) return pair[1];
        }
    }

    keys() {
        let arr = [];
        for (let subarr of this.keyMap) {
            if (subarr === undefined) continue;
            subarr.forEach(pair => arr.push(pair[0]))
        }
        return arr;
    }

    values() {
        let arr = [];
        for (let subarr of this.keyMap) {
            if (subarr === undefined) continue;
            subarr.forEach(pair => arr.push(pair[1]))
        }
        return arr;
    }
}