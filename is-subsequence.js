function isSubsequence(substr, str) {
  // good luck. Add any arguments you deem necessary.
  let first = 0;
  let firstChar = substr[first];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (firstChar === char) {
      if (first === (substr.length - 1)) {
        return true;
      }
      first++;
      firstChar = substr[first];
    }
  }

  return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); //true
console.log(isSubsequence('abc', 'abracadabra')); //true
console.log(isSubsequence('abc', 'acb')); //false
