const numberGenerator = require('./number-generator');
const numbers = numberGenerator(1, 100000);

const sort = (numbers) => {
  if (numbers.length < 2) return numbers;
  const length = numbers.length;
  const mid = Math.floor(length / 2);

  const left = numbers.slice(0, mid);
  const right = numbers.slice(mid);

  return merge(sort(left), sort(right));
};

const merge = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  if (left.length) {
    left.forEach(num => {
      result.push(num);
    });
    left = [];
  }

  if (right.length) {
    right.forEach(num => {
      result.push(num);
    });
    right = [];
  }

  return result;
}

console.time('Time this');
const sortedNumbers = sort(numbers);
console.timeEnd('Time this');
