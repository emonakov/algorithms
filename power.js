function power(a,b){
  if (a === 0) {
    return 0;
  }

  if (b === 0) {
      return 1;
  }

  return a * power(a, b - 1);
}

console.log(power(2,4));
