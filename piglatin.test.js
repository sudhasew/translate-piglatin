const translate = require("./piglatin");
test("sudha should produce udhasay", () => {
  expect(translate("SUDHA")).toEqual("udhasay");
});

test("apple should produce appleway", () => {
  expect(translate("apple")).toEqual("appleway");
});
