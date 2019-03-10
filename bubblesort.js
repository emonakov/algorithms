const numberGenerator = require('./number-generator');
const numbers = numberGenerator(1, 6666);

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

console.time('Time this');
sort(numbers);
console.timeEnd('Time this');
