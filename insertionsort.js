const numberGenerator = require('./number-generator');
const numbers = numberGenerator(1, 100000);

const sort = (numbers, minIndex = 0) => {
    const maxIndex = numbers.length - 1;
    const candidateIndex = minIndex + 1;
    for (let i = candidateIndex; i >= 0; i--) {
        const sorted = numbers[i-1];
        const candidateNumber = numbers[i];
        if (sorted > candidateNumber) {
            numbers[i-1] = candidateNumber;
            numbers[i] = sorted;
        }
    }
    if (minIndex === maxIndex) {
        return numbers;
    }
    return sort(numbers, ++minIndex);
};

const iterativeSort = numbers => {
  for (let i = 1; i < numbers.length; i++) {
    for (let k = i; k >= 0; k--) {
      const sorted = numbers[k-1];
      const candidateNumber = numbers[k];
      if (sorted > candidateNumber) {
          numbers[k-1] = candidateNumber;
          numbers[k] = sorted;
      }
    }
  }
}

console.time('Time this');
iterativeSort(numbers);
console.timeEnd('Time this');
