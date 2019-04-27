function reverse(string){
  if (!string.length) {
      return '';
  }
  const lastChar = string.substr(-1);
  return lastChar + reverse(string.slice(0, -1));
}
