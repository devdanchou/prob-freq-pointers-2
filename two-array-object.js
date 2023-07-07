"use strict";
// add whatever parameters you deem necessary & write docstring
function twoArrayObject(keys,values) {
  const letterToNum = {}
  let i=0


  while(i<keys.length){
    letterToNum[keys[i]] = values[i] || null;
    i++;
  }
  return letterToNum

}
