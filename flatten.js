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