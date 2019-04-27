function maxSubarraySum(nums, count) {
  const numsLength = nums.length;
  if (numsLength < count) {
    return null;
  }

  let start = 0;
  let next = count - 1;
  let maxSum = 0;
  let tempSum = 0;

  for(let i = 0; i < count; i++) {
    maxSum += nums[i];
  }

  next++;
  tempSum = maxSum;

  while(next < numsLength) {
    tempSum = tempSum - nums[start] + nums[next];
    maxSum = Math.max(maxSum, tempSum);
    start++;
    next++;
  }

  return maxSum;
}

console.log(maxSubarraySum([100,200,300,400], 2)); // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)); // 39
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)); // 5
console.log(maxSubarraySum([2,3], 3)); // null
