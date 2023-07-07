"use strict";
// add whatever parameters you deem necessary & write docstring
function sameFrequency(num1,num2) {
  const str1 = num1.toString().split('');
  const str2 = num1.toString().split('');
  const numToCount ={}
  if(str1.length !== str2.length) return false;

  for(let num of str1){
    numToCount[num] = (numToCount[num] || 0 ) + 1;
  }

  for(let num of str2){
    if(num in numToCount){
      numToCount[num]--;
    }
  }

  return Object.values(numToCount).every(char => char === 0)
}
