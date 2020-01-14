const letterPositions = function(string) {
  const results = {};

  for (let i = 0; i < string.length; i++) {
    if (results[string[i]]) {
      results[string[i]].push(i);
    } else {
      results[string[i]] = [i];
    }
  }
  
  return results;
};

module.exports = letterPositions;

// const result1 = letterPositions("hello");
// const expected = {
//   h: [0],
//   e: [1],
//   l: [2, 3],
//   o: [4]
// };

// assertArraysEqual(result1['h'], expected['h']);
// assertArraysEqual(result1['e'], expected['e']);
// assertArraysEqual(result1['l'], expected['l']);
// assertArraysEqual(result1['o'], expected['o']);