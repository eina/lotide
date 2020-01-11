const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      // check first if both items are arrays 
      // esp since [] === [] => false
      if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        // to make sure it doesn't break out of the if statement
        // and keeps running eqArrays on all items if true
        if(!eqArrays(arr1[i], arr2[i])) {
          return false;
        }
      } else if (arr1[i] !== arr2[i]) {          
        return false;        
      }
    }
    return true;
  }
};

const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => FAIL

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => FAIL

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]) , true) // => PASS

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => FAIL
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => FAIL
