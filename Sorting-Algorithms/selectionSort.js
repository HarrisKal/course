// Selection Sort relies on finding the smallest el in the array on every iteration
// and placing it at the start of the array. The way we do it is:
//      Set a min to the first el.
//      Compare it to every other el until to find a smaller one.
//      If we find a smaller el, set min to it.
//      After each iteration, swap min with the start of the arr.

Array.prototype.swap = function (i1, i2) {
    // Take two indexes of an array and swap them.
    [this[i1], this[i2]] = [this[i2], this[i1]]
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        if (i !== min) arr.swap(min, i);
    }
    return arr;
}

// Is the least efficient way to sort