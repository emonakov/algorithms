const numberGenerator = require('./number-generator');
const numbers = numberGenerator(1, 100000);

const sort = (numbers, minIndex = 0) => {
    const maxIndex = numbers.length - 1;
    if (maxIndex === minIndex) {
        return numbers;
    }
    const smallestIndex = findSmallest(numbers, minIndex);
    const smallestNumber = numbers[smallestIndex];
    const swapNumber = numbers[minIndex];
    numbers[minIndex] = smallestNumber;
    numbers[smallestIndex] = swapNumber;
    return sort(numbers, ++minIndex);
};

const findSmallest = (numbers, minIndex = 0) => {
    let smallestIndex = minIndex;
    let smallestNumber = numbers[minIndex];

    for(let i = minIndex; i < numbers.length; i++) {
        if(numbers[i] < smallestNumber) {
            smallestIndex = i;
            smallestNumber = numbers[i];
        }
    }

    return smallestIndex;
};

const iterativeSort = numbers => {
  for (let i = 0; i < numbers.length; i++) {
    const swapCandidate = numbers[i];
    const smallestIndex = findSmallest(numbers, i);
    numbers[i] = numbers[smallestIndex];
    numbers[smallestIndex] = swapCandidate;
  }
};

console.time('Time this');
iterativeSort(numbers);
console.timeEnd('Time this');
