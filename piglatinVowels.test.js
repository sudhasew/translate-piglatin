const translate = require("./piglatinVowels");

test("ambition should produce ambitionway", () => {
  expect(translate("ambition")).toEqual("ambitionway");
});
