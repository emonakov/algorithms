function findLongestSubstring(str) {
  if (str.length === 0) return 0;

  let start = 0;
  let end = 0;
  let max = 0;
  let lookup = {};

  while (start <= end && start < str.length) {
    if (end < str.length && !lookup[str[end]]) {
      lookup[str[end]] = 1;
      end++;
    } else {
      max = Math.max(max, end - start);
      delete lookup[str[start]];
      start++;
    }
  }

  return max;
}

// console.log(findLongestSubstring(''));
console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("longestsubstring"));
