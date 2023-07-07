"use strict";

// add whatever parameters you deem necessary & write docstring
//** this function takes in an array of nums and a target number
/* utilize two pointers to find if there is a pair matches that target
returns a boolean
*/
function averagePair(nums, targetAvg) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const avg = (nums[left] + nums[right]) / 2;
    if (avg == targetAvg) {
      return true;
    } else if (avg > targetAvg) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

