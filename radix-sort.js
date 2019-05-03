const numberGenerator = require('./number-generator');
const numbers = numberGenerator(1, 1000000);

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) {
      return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let mostDigits = 0;
  for (const num of nums) {
      mostDigits = Math.max(mostDigits, digitCount(num));
  }

  return mostDigits;
}

function radixSort(nums) {
  let mostDigitsCount = mostDigits(nums);
  for (let k = 0; k < mostDigitsCount; k++) {
      let digitBuckets = Array.from({length: 10}, () => []);
      for (let i = 0; i < nums.length; i++) {
          let kthDigit = getDigit(nums[i], k);
          digitBuckets[kthDigit].push(nums[i]);
      }
      nums = [].concat(...digitBuckets);
  }

  return nums;
}

console.time('Time this');
let nums = radixSort(numbers);
console.log(nums.slice(0, 10));
console.timeEnd('Time this');
