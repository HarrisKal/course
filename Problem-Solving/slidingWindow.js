// Involves creating a window which can be an array or a number from one position to another.
// Depending on a condition, the window either increases or closes, creating a new one.
// Very useful for keeping track of a subset of data in a data structure.

// Create a function that takes two inputs:
// an int[] and an integer n.
// It returns the largest sum of n consecutive numbers of the array.

function maxArraySum(arr, n) {
    if (n > arr.length) return null;
    let max = -Infinity;
    for (let i = 0; i < arr.length - n + 1; i++) {
        let temp = 0;
        for (let j = 0; j < n; j++) {
            temp += arr[i + j]
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}
// Tc = O(n^2) 

function maxSubarraySum(arr, num) {
    let max = 0, temp = 0;
    if (arr.length < num) return null;

    for (let i = 0; i < num; i++) max += arr[i];
    temp = max;

    for (let i = num; i < arr.length; i++) {
        temp -= arr[i - num] + arr[i]
        max = Math.max(max, temp)
    }
    return max;
}
// Tc = O(n)
// Here, instead of adding all possible sums of the array, we slide the window of the sum:
// So, when we are done summing the first n numbers, we subtract the first one and add the next one.