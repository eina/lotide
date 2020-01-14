const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


describe("#countOnly", () => {
  it("object {ab} === {ba} true", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(ab, ba), true); // => true    
  });

  it('should return false', function () {
    assert.strictEqual( eqObjects({ a: { z: { x: 1 }, b: 2 }}, { a: { z: { x: 1 }, b: 2 }}), true )
  });
});
