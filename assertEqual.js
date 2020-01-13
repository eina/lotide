const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('orange', 'orange');
assertEqual('blue', 'purple');
assertEqual(100, 50);

module.exports = assertEqual;