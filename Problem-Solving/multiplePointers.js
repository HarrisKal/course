// Create pointers that correspond to an index and move towards the beggining,
// end or middle based on a certain condition.

// Create a function that takes a filtered array and finds the first pair of numbers that add to 0.
// Hint: use two pointers that move on opposite directions and meet in the middle.
function sumZero(arr) {
    let startP = 0;
    let endP = arr.length - 1;
    while (startP < endP) {
        if (arr[startP] + arr[endP] === 0) return [arr[startP], arr[endP]];
        else if (arr[startP] + arr[endP] > 0) endP--;
        else startP++;
    }
    return;
}

// Create a function that takes a filtered number[] and retruns the number of unique numbers in it.
// Hint: use two pointers that move on the same direction.

function countUniqueValues(arr) {
    let holder = [];
    for (let num of arr) {
        if (!holder.includes(num)) {
            holder.push(num)
        }
    }
    return holder.length;
}
// Space_c = O(n), Time_c = O(n)

function countUniqueValues2(arr) {
    let p1 = 0, p2 = 1;
    while (p2 < arr.length) {
        if (arr[p1] === arr[p2]) {
            arr.splice(arr[p1], 1);
        } else {
            p1++; p2++;
        }
    }
    return arr.length;
}
// Space_c = O(1), Time_c = O(n)