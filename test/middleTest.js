const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    // eslint-disable-next-line no-undef
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});

describe("#middle", () => {
  it("returns [2,3] for [1, 2, 3, 4]", () => {
    // eslint-disable-next-line no-gitundef
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});