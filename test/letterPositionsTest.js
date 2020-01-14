const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("result1['h'] should be expected['h']", function () {
    const result1 = letterPositions("hello");
    assert.deepEqual(result1['h'], [0]);
  });
  it('', function () {
    const result1 = letterPositions("hello");
    assert.deepEqual(result1['l'], [2, 3])
  });
});
