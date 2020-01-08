/** TESTING FUNCTIONS/ASSERTIONS */
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Yay, these are the same arrays!`);
  } else {
    console.log(`🛑🛑🛑 Aww, these are NOT the same arrays.`);
  }
};

/** ================================================ */

const letterPositions = function(string) {
  const results = {};

  for (let i = 0; i < string.length; i++) {
    if (results[string[i]]) {
      results[string[i]].push(i);
    } else {
      results[string[i]] = [i];
    }
  }
  
  return results;
};

const result1 = letterPositions("hello");
const expected = {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4]
};

assertArraysEqual(result1['h'], expected['h']);
assertArraysEqual(result1['e'], expected['e']);
assertArraysEqual(result1['l'], expected['l']);
assertArraysEqual(result1['o'], expected['o']);