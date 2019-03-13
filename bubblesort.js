const numberGenerator = require('./number-generator');
const numbers = numberGenerator(1, 100000);

const sort = (numbers, minIndex = 0) => {
    const maxIndex = numbers.length - 1;
    if (maxIndex === minIndex) {
        return numbers;
    }
    for (let i = maxIndex; i >= minIndex; i--) {
        let rightNumber = numbers[i];
        let leftNumber = numbers[i-1];
        if (leftNumber > rightNumber) {
            numbers[i] = leftNumber;
            numbers[i-1] = rightNumber;
        }
    }
    return sort(numbers, ++minIndex);
};

const sortIterative = (numbers) => {
  const len = numbers.length - 1;
  for (let i = len; i >= 0; --i) {
    for (let k = 0; k < i; k++) {
      let rightNumber = numbers[i];
      let leftNumber = numbers[k];
      if (leftNumber > rightNumber) {
        numbers[i] = leftNumber;
        numbers[k] = rightNumber;
      }
    }
  }
  return numbers;
}

console.time('Time this');
sortIterative(numbers);
console.timeEnd('Time this');
