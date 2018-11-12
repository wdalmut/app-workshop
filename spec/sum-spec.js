const somma = require('../sum');

describe("Somma", () => {
  it("2+2=4", () => {
    expect(somma(2,2)).toEqual(4);
  });
});
