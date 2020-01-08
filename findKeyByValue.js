/* eslint-disable camelcase */
// ignore eslint camelcase rule for tests/assertions

const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(obj, string) {
  const keyArray = Object.keys(obj);
  let result;

  for (let i = 0; i < keyArray.length; i++) {
    // keyArray[i] = key in obj
    if ((obj[keyArray[i]] === string)) {
      result = keyArray[i];
    }
  }

  return result;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), 'comedy');

const carlyRaeJepsenSongs = {
  dedicated: "Party for One",
  kiss: "Call Me Maybe",
  e_mo_tion:  "When I Needed You"
};

assertEqual(findKeyByValue(carlyRaeJepsenSongs, "Party for One"), "dedicated");
assertEqual(findKeyByValue(carlyRaeJepsenSongs, "Numb"), undefined);
assertEqual(findKeyByValue(carlyRaeJepsenSongs, "When I Needed You"), 'e_mo_tion');