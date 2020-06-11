function reverse(string){
  if (!string.length) {
      return '';
  }
  const lastChar = string.substr(-1);
  return lastChar + reverse(string.slice(0, -1));
}

function reverseInt(number) {
  if (!number && !Number.isFinite(number)) {
    return number;
  }

  const reverseIt = string => {
    if (!string.length) {
      return '';
    }
    const lastChar = string.substr(-1);
    return lastChar + reverseIt(string.slice(0, -1));
  }

  const sign = Math.sign(number);
  const numberString = String(Math.abs(number));

  return sign * reverseIt(numberString);
}
