const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);

  const isObject = (value) => {
    return typeof value === "object" && !Array.isArray(value);
  }
  
  // equal if they have the same length
  if(obj1Keys.length === obj2Keys.length) {    
    // check if they have the same value and keys      
    for(const key of obj1Keys) { 
      if( Array.isArray(object1[key]) && Array.isArray(object2[key]) ) {        
        return eqArrays(object1[key], object2[key]);
      } else if ( isObject(object1[key]) && isObject(object2[key]) ) {
        return eqObjects(object1[key], object2[key]);
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
};

module.exports = eqObjects;
