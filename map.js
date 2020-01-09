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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

/** ============================================== */
const words = ["toss", "another", "coin", "to", "your", "witcher"];

const map = (array, callback) => {
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, [ 't', 'a', 'c', 't', 'y', 'w' ]);
assertArraysEqual(map(words, word => word[1]), [ 'o', 'n' , 'o', 'o', 'o', 'i' ]);
assertArraysEqual(map(words, word => word[word.length - 1]), [ 's', 'r', 'n', 'o', 'r', 'r' ]);