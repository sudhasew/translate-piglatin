//TRANSLATING BOTH THE VOWELS AND CONSONANTS TO PIG LATIN.

const translate = require("./piglatin");

//Words starting with consonants.

test("banana should produce ananabay", () => {
  expect(translate("banana")).toEqual("ananabay");
});

test("giraffe should produce iraffegay", () => {
  expect(translate("giraffe")).toEqual("iraffegay");
});

test("sunshine should produce unshinesay", () => {
  expect(translate("SUNSHINE")).toEqual("unshinesay");
});

test("sun should produce unsay", () => {
  expect(translate("sun")).toEqual("unsay");
});

//Words starting with vowels.

test("apple should produce appleway", () => {
  expect(translate("apple")).toEqual("appleway");
});

test("else should produce elseway", () => {
  expect(translate("else")).toEqual("elseway");
});

test("indigo should produce indigoway", () => {
  expect(translate("INDIGO")).toEqual("indigoway");
});

test("orange should produce orangeway", () => {
  expect(translate("orange")).toEqual("orangeway");
});

test("umbrella should produce umbrellaway", () => {
  expect(translate("umbrella")).toEqual("umbrellaway");
});
