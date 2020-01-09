const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  
  // equal if they have the same length
  if(obj1Keys.length === obj2Keys.length) {      
    // check if they have the same value and keys      
    for(key of obj1Keys) { 
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {        
        return eqArrays(object1[key], object2[key]);
      } else {                
        if(object1[key] !== object2[key]) {
          return false;        
        }    
      }
    }
    return true;
  } else {
    return false;
  }  
}

const assertObjectEqual = function(actual, expected) {
  // output the object on the console, instead of [object Object]
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectEqual(cd, cd2); // => fail

