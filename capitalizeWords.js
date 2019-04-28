function capitalizeWords (words) {
  if (words.length === 1) {
      return [words[0].toUpperCase()];
  }

  const newArr = [];
  newArr.push(words[0].toUpperCase());

  return newArr.concat(capitalizeWords(words.slice(1)));
}

capitalizeWords(['i', 'am', 'learning', 'recursion']); // ['I', 'AM', 'LEARNING', 'RECURSION']
