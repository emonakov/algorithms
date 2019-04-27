function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
      const sum = arr[left] + arr[right];
      if (sum === 0) {
        return [arr[left], arr[right]];
      }

      if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
}


console.log(sumZero([-5, -4,-3,-2,-1,0,6,7,8]));
