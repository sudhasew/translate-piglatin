//TRANSLATING BOTH THE VOWELS AND CONSONANTS TO PIG LATIN.

const functions = require("./piglatin");

//Words starting with consonants.

test("banana should produce ananabay", () => {
  expect(functions.consonant("banana")).toEqual("ananabay");
});

test("giraffe should produce iraffegay", () => {
  expect(functions.consonant("giraffe")).toEqual("iraffegay");
});

test("sunshine should produce unshinesay", () => {
  expect(functions.consonant("SUNSHINE")).toEqual("unshinesay");
});

test("sun should produce unsay", () => {
  expect(functions.consonant("sun")).toEqual("unsay");
});

//Words starting with vowels.

test("apple should produce appleway", () => {
  expect(functions.vowel("apple")).toEqual("appleway");
});

test("else should produce elseway", () => {
  expect(functions.vowel("else")).toEqual("elseway");
});

test("indigo should produce indigoway", () => {
  expect(functions.vowel("INDIGO")).toEqual("indigoway");
});

test("orange should produce orangeway", () => {
  expect(functions.vowel("orange")).toEqual("orangeway");
});

test("umbrella should produce umbrellaway", () => {
  expect(functions.vowel("umbrella")).toEqual("umbrellaway");
});
