// Dynamic Programming is a way to solve problems with two criteria:
// Breaking them down to smaller problems,
// Remembering the solutions to the smaller problems to avoid solving them again.

// Simple recursion TC = O(2^n) SC = O(n)
function fib1(n) {
    if (n <= 2) return 1;
    return fib1(n - 1) + fib1(n - 2);
}

// Memoization TC = O(n) SC = O(n)
function fib2(n, memo = []) {
    if (memo[n]) return memo[n];
    if (n < 3) return 1;
    let res = fib2(n - 1, memo) + fib2(n - 2, memo);
    memo[n] = res;
    return res;
}

// Tabulation TC = O(n) SC = O(n)
function fib3(n) {
    if (n <= 2) return 1;
    let fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}