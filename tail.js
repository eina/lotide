const tail = function(array) {
  return array.slice(1);
};

const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

/** Test Case: Check if original array is non-mutated */
/** Test Case: Check if result is correct */
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// const result = tail(words);
// assertEqual(words.length, 3);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

/** Test Case: Check function if array only has one item */
// const one = ["Test"];
// const result = tail(one);
// console.log('this is the result', result)
// console.log('-----------------------')
// assertEqual(one.length, 1);
// assertEqual(result[0], undefined);

/** Test Case: Check function if array is empty */
const one = [];
const result = tail(one);
console.log('this is the result', result);
console.log('-----------------------');
assertEqual(one.length, 0);
// assertEqual(result[0], undefined);