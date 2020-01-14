const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("[1, 2, [3, 4], 5, [6]] returns [1, 2, 3, 4, 5, 6])", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("[[30], [21, 51], [100, 83, 15, 1], 22, [94, 41]] returns [30, 21, 51, 100, 83, 15, 1, 22, 94, 41]", function () {
    assert.deepEqual(flatten([[30], [21, 51], [100, 83, 15, 1], 22, [94, 41]]), [30, 21, 51, 100, 83, 15, 1, 22, 94, 41]);    
  });
});
