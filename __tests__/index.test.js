beforeEach(() => {
  require("../src/index");
});

describe("Array.prototype.smoosh", function() {
  it("should smoosh arrays leveled", function() {
    const arrayOneLevel = [1, [2, [3]]];
    expect(arrayOneLevel.smoosh(1)).toEqual([1, 2, [3]]);
  });
  it("should smoosh arrays recursively", function() {
    const arrayFourLevels = [1, [2, [3, [4]]]];
    expect(arrayFourLevels.smoosh()).toEqual([1, 2, 3, 4]);
  });
});

describe("Array.prototype.smooshMap", function() {
  it("should smoosh the array recursively and map the values", function() {
    const array = [1, [2, [3, [4]]]];
    expect(array.smooshMap(i => i * 2)).toEqual([2, 4, 6, 8]);
  });
});
