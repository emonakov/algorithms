function someRecursive(nums, cb){
  if (!nums.length) {
      return false;
  }

  const last = nums[nums.length - 1];
  if (cb(last)) {
      return true;
  }

  return someRecursive(nums.slice(0, -1), cb);
}

console.log(someRecursive([1,2,3,4], val => val % 2 !== 0)) // true
console.log(someRecursive([4,6,8,9], val => val % 2 !== 0)) // true
console.log(someRecursive([4,6,8], val => val % 2 !== 0)) // false
console.log(someRecursive([4,6,8], val => val > 10)); // false
