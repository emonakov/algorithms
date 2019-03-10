const range = (start, end) => {
  const numbers = [];
  for (let i = start; i < end; i++) {
    numbers.push(i);
  }

  return numbers;
};

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

module.exports = (start, end) => {
  return shuffleArray(range(start, end));
}
