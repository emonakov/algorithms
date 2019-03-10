const numbers = Array.from({length: 20}, () => Math.floor(Math.random() * 10) * Math.floor(Math.random() * 10));

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

console.log(numbers);

sort(numbers);

console.log(numbers);