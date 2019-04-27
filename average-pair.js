function averagePair(nums, avg){
  if (!nums.length) {
    return false;
  }

  let left = 0;
  let right = nums.length - 1;

  while(left < right) {
    const first = nums[left];
    const second = nums[right];
    const tmpAvg = (first + second) / 2;

    if ((first + second) / 2 === avg) {
      return true;
    }

    if (tmpAvg > avg) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}


console.log(averagePair([1,2,3], 2.5)); //true
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)); //true
console.log(averagePair([-1,0,3,4,5,6], 4.1)); //false
console.log(averagePair([], 4)); //false
