// Quick Sort expliots the fact that arrays are sorted when their length is 1.
// It works by selecting a pivot point. All els smaller than the pivot go 
// to its left side, all els greater than the pivot go to its right side. 
// Then, it recursively applies itself to both sides.

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[0];
    let lesser = [];
    let greater = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > pivot) {
            greater.push(arr[i]);
        } else {
            lesser.push(arr[i]);
        }
    }
    return [...quickSort(lesser), pivot, ...quickSort(greater)];
}

// OR

Array.prototype.swap = function (i1, i2) {
    // Take two indexes of an array and swap them.
    [this[i1], this[i2]] = [this[i2], this[i1]]
}

function quickSort2(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotI = pivot(arr, left, right)
        quickSort2(arr, left, pivotI - 1)
        quickSort2(arr, pivotI + 1, right)
    }
    return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start], swapI = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapI++;
            arr.swap(swapI, i)
        }
    }
    arr.swap(start, swapI);
    return swapI;
};

// Tc = O(n log n), Sc = O(n) or Sc2 = O(log n)