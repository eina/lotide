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

module.exports = flatten;

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// assertArraysEqual(flatten([[30], [21, 51], [100, 83, 15, 1], 22, [94, 41]]), [30, 21, 51, 100, 83, 15, 1, 22, 94, 41]);
