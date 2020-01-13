const assertArraysEqual = require('./assertArraysEqual');

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

// // Single Value
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);

// // Odd Number of Elements
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// // Even Number of Elements
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

module.exports = middle;