/** TESTING FUNCTION/ASSERTION */

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

/** ======================================= */

const flatten = function(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let k = 0; k < array[i].length; k++) {
        result.push(array[i][k]);
      }
    } else {
      result.push(array[i]);
    }
  }

  return result;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[30], [21, 51], [100, 83, 15, 1], 22, [94, 41]]), [30, 21, 51, 100, 83, 15, 1, 22, 94, 41]);
