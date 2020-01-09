const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = (object, callback) => {
  const keyArray = Object.keys(object);
  // let result;

  for (const objKeys of keyArray) {
    objValue = object[objKeys]; // returns { stars: 1 }
    if(callback(objValue)) {
      return objKeys;
    }    
  }  
};

const testData = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(testData, x => x.stars === 2), "noma");
assertEqual(findKey(testData, x => x.stars === 3), "Akaleri");
assertEqual(findKey(testData, x => x.stars === "blue"), undefined);
