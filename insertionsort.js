const numberGenerator = require('./number-generator');
const numbers = numberGenerator(1, 6666);

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

console.time('Time this');
sort(numbers);
console.timeEnd('Time this');
