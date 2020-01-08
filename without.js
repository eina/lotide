/** Testing Functions/Assertions */

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

/** ============================== */

const without = function(source, itemsToRemove) {
  let result = [];
  if (itemsToRemove.length) {
    // loop through items to remove
    itemsToRemove.map(x => {
      // filter it out of source
      result = source.filter(item => x !== item);
    });
    // return that array
    return result;
  } else {
    return source;
  }
};


/** Ensure original array is not being modified */
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log('===========================');

// regular assertions

assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);