const logAmount = require("./1-initProject");

test("Outputs correct description for small number", () => {
  expect(logAmount(9)).toBe("small number");
});

test("Outputs correct description for large number", () => {
  expect(logAmount(10)).toBe("large number");
});
