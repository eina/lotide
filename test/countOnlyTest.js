const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it("should return 1 for Jason", () => {
    const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true });
    assert.strictEqual(result1["Jason"], 1);    
  });

  it('should return undefined for Karima', function () {
    const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true });
    assert.strictEqual(result1["Karima"], undefined);    
  });
});
