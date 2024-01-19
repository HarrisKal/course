// Insertion Sort relies on taking each el of an arr and finding out where it goes 
// in the sorted portion. Loop through the arr. As long as an el is larger than 
// the previous element, move it closer to arr[0], by setting each index of the 
// array to the value of the one before it, and placing the el to the final spot.

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i]
        for (var mov = i - 1; mov >= 0 && arr[mov] > curr; mov--) {
            arr[mov + 1] = arr[mov];
        }
        arr[mov + 1] = curr;
    }
    return arr;
}

// It is more efficient when the array is almost sorted.
// Or when there is data constantly coming in.