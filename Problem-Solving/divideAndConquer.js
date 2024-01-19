// Involves dividing a data set into smaller chunks and repeating a process with that subset. 
// Tremendously decreases time complexity Tc, usually to Tc = O(log n)

const search = (arr, n) => arr.includes(n) ? arr.findIndex(el => el == n) : -1;

function binarySearch(arr, n) {
    let min = 0, max = arr.length - 1;

    while (min <= max) {
        const mid = Math.floor((min + max) / 2);

        if (arr[mid] < n) {
            min = mid + 1;
        }
        else if (arr[mid] > n) {
            max = mid - 1;
        }
        else return mid;
    }
    return -1;
}

