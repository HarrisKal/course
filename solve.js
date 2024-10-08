function fib(n, memo = []) {
    if (memo[n]) return memo[n];
    if (n < 3) return 1;
    let res = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = res;
    return res;
}

console.log(fib(9))