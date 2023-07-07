"use strict";

// add whatever parameters you deem necessary & write doc comment
//** the function takes in a word and letters
/* makes a frequency counter and subtracts the count of the object
returns a boolean
*/
function canConstructWord(word, letters) {

  if (word.length > letters.length) return false;

  const freqCounter = {};

  for (let char of letters) {
    freqCounter[char] = (freqCounter[char] || 0) + 1;
  }

  for (let char of word) {
    if (!freqCounter[char]) {
      return false;
    } else {
      freqCounter[char]--;
    }
  }

  return true;
}

console.log(canConstructWord('aa', 'abc'));
  // false -- can't build "aa" with only 1 "a"

console.log(canConstructWord('abc', 'dcba'));
  // true -- can build "abc" with letters "abcd"

console.log(canConstructWord('aabb', 'bcabad'));
  // true -- can build "aabbcc" with those letters
