beforeEach(() => require("../src"));

describe("Array.prototype.smoosh", function() {
  it("should smoosh arrays leveled", function() {
    const arrayOneLevel = [1, [2, [3]]];
    let result = arrayOneLevel.smoosh(1);
    const expected = [1, 2, [3]];
    expect(result).toEqual(expected);
  });

  it("should smoosh arrays recursively", function() {
    const arrayFourLevels = [1, [2, [3, [4]]]];
    const result = arrayFourLevels.smoosh();
    const expected = [1, 2, 3, 4];
    expect(result).toEqual(expected);
  });
});

describe("Array.prototype.smooshMap", function() {
  it("should smoosh the array recursively and map the values", function() {
    const array = [1, [2, [3, [4]]]];
    const result = array.smooshMap(i => i * 2);
    const expected = [2, 4, 6, 8];
    expect(result).toEqual(expected);
  });
});
