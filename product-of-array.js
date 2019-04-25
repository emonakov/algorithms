function productOfArray(nums) {
  if (!nums.length) {
    return 1;
  }

  return nums[0] * productOfArray(nums.slice(1));
}

console.log(productOfArray([1,2,3])); // 6
console.log(productOfArray([1,2,3,10])); // 60
