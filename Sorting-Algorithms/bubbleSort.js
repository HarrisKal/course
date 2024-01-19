// Bubble Sort relies on two nested loops. The inner one (j) reaches to i-1 
// and the outer (i) starts at the end of the arr.
// We compare two els of an arr and swapping them based on a condition.
// The larger values bubble their way to the top of the array.
// Finally, we check if we swapped anything during an iteration. 
// If we did, continue looping. If not, stop the loop because we are done.
// The time complexity is O(n^2)

Array.prototype.swap = function (i1, i2) {
    // Take two indexes of an array and swap them.
    [this[i1], this[i2]] = [this[i2], this[i1]]
}

function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        let swaps = false;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                arr.swap(j, j + 1);
                swaps == true;
            };
        }
        if (!swaps) break;
    }
    return arr;
}