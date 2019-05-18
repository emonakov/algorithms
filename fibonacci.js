const fibNumbers = [0, 1, 1];

function fibIterative(n) {
  if (fibNumbers[n]) {
    return fibNumbers[n];
  }

  if (n <= 2) {
    return 1;
  }

  for (var i = 3; i <= n; i++) {
    fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
  }

  return fibNumbers[n];
}

function fibMemo(n, memo = {}) {
  if (memo[n]) {
    return memo[n];
  }
  if (n <= 2) {
    return 1;
  }

  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;

  return res;
}
