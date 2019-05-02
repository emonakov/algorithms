const numberGenerator = require('./number-generator');
const numbers = numberGenerator(1, 1000000);

function pivot(arr, start, end) {
  let pivot = arr[start];
  var swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
          swapIdx++;
          [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
      }
  }
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];

  return swapIdx;
}

function sort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
      let pivotIdx = pivot(arr, left, right);
      sort(arr, left, pivotIdx - 1);
      sort(arr, pivotIdx + 1, right);
  } else {
      return arr;
  }
}

console.time('Time this');
sort(numbers);
console.log(numbers.slice(0, 10));
console.timeEnd('Time this');
