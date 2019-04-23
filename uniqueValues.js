function unique(values) {
  if (values.length === 1) {
    return 1;
  }
  let i = 0;

  for (let j = i + 1; j < values.length; j++) {
    if (values[i] < values[j]) {
      i++;
      values[i] = values[j];
    }
  }

  return i + 1;
}

console.log(unique([1,1,1,1,1,1,2]));
console.log(unique([1,1,2,2,2,3,3,3,4,5,6,7,7,7,8]));
