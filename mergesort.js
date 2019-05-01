const numberGenerator = require('./number-generator');
const numbers = numberGenerator(1, 100000);

function merge (arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while(i < arr1.length && j < arr2.length) {
      if (arr2[j] > arr1[i]) {
          results.push(arr1[i]);
          i++;
      } else {
          results.push(arr2[j]);
          j++;
      }
  }

  while(i < arr1.length) {
      results.push(arr1[i]);
      i++;
  }

  while(j < arr2.length) {
      results.push(arr2[j]);
      j++;
  }

  return results;
};

function sort(arr) {
  if (arr.length === 1) {
      return arr;
  }

  const mid = Math.round(arr.length/2);
  return merge(
      sort(arr.slice(0, mid)),
      sort(arr.slice(mid))
  );
}

console.time('Time this');
const sortedNumbers = sort(numbers);
console.log(sortedNumbers.slice(0, 10));
console.timeEnd('Time this');
