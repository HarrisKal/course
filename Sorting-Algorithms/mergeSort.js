// Merge Sort relies on spliting an array into arrays of 
// 1 or 0 els, comparing and merging them.

function merge(arr1, arr2) {
    let newArr = [];
    let i = 0, j = 0;
    while (arr1.length + arr2.length > newArr.length) {
        if ((arr1[i] <= arr2[j] || !arr2[j]) && arr1[i]) {
            newArr.push(arr1[i]);
            i++;
        }
        if ((arr1[i] >= arr2[j] || !arr1[i]) && arr2[j]) {
            newArr.push(arr2[j]);
            j++;
        }
    }
    return newArr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([3, 6, 2, 7, 35, 53, 72, 8, 43, 36]))