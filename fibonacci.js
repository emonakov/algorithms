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

  let res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo[n] = res;

  return res;
}

function fib(n) {
  if (n <= 2) {
      return 1;
  }

  let res1 = fib(n - 1);
  let res2 = fib(n - 2);

  return res1 + res2;
}

function someRecoursiveFunction(n) {
  if (n <= 1) {
      return 1;
  }

  const result = someRecoursiveFunction(--n);

  return result;
}

someRecoursiveFunction(13981);
