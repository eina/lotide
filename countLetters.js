const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  let result = {};
  for (const character of sentence) {
    if (character !== ' ') {
      if (result[character]) {
        result[character] += 1;
      } else {
        result[character] = 1;
      }
    }
  }
  return result;
};

/** Test Assertions */

const result1 = countLetters("lighthouse in the house");
const expected = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

assertEqual(result1['h'], expected['h']);
assertEqual(result1['b'], undefined);
assertEqual(result1['e'], expected['e']);
