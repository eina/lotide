const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');


describe("#countOnly", () => {
  it("should return 1 for Jason", () => {
    const carlyRaeJepsenSongs = {
      dedicated: "Party for One",
      kiss: "Call Me Maybe",
      e_mo_tion:  "When I Needed You"
    };
    assert.strictEqual(findKeyByValue(carlyRaeJepsenSongs, "Party for One"), "dedicated");    
  });

  it('should return undefined for Karima', function () {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");    
  });
});
