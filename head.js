const assertEqual = require('./assertEqual');

const head = function(array) {
  // console.log('what is the array', array);
  return array[0];
};

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head(["test"]), "test");
// assertEqual(head([]), undefined);

module.exports = head;