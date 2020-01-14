const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#countOnly", () => {
  it("object {ab} === {ba} true", () => {
    assert.strictEqual(eqArrays([1, 2], [1, 2]), true);
  });

  it('should return false', function () {
    assert.strictEqual( eqArrays([1, 2, 3], [2, 4]), false )
  });
});
