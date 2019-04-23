function minSubArrayLen(arr, value) {
  if (!arr || !arr.length || !value) {
    return 0;
  }
  let left = 0;
  let right = 1;
  let sum = arr[left];
  let minLen = Infinity;

  while (right <= arr.length) {
    if (sum < value) {
      sum += arr[right++];
    } else {
      if (minLen > right - left) {
        minLen = right - left;
      }

      sum -= arr[left++];
    }
  }

  return minLen < Infinity ? minLen : 0;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7));
