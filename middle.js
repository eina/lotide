/** TESTING/ASSERTION FUNCTIONS  */

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

/** =========================== */

const middle = function(array) {
  const halfIndex = Math.floor(array.length / 2);

  if (array.length <= 2) {
    return [];
  } else {
    if (array.length % 2 === 0) {
      return [array[halfIndex - 1], array[halfIndex]];
    } else {
      return [array[halfIndex]];
    }
  }
};

// Single Value
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

// Odd Number of Elements
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// Even Number of Elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

