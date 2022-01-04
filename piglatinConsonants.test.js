// Translating english words with consonants to Pig Latin.
// If word start with consonants are flipped to the ends of words and -ay
// added to each word.
// EX: Hello World to elloHay orldWay

const translate = require("./piglatinConsonants");

//Translating "hello world" to Pig Latin.
test("hello world should produce ellohay orldway", () => {
  expect(translate("hello world")).toEqual("ellohay orldway");
});

//Translating "base ball" to Pig Latin.
test("base ball should produce asebay allbay", () => {
  expect(translate("base ball")).toEqual("asebay allbay");
});

//Translating "vyshnavi" to Pig Latin.
test("vyshnavi should produce yshnavivay", () => {
  expect(translate("vyshnavi")).toEqual("yshnavivay");
});

//Translating "dolphin" to Pig Latin.
test("dolphin should produce olphinday", () => {
  expect(translate("dolphin")).toEqual("olphinday");
});

//Translating "neighbor" to Pig Latin.
test("neighbor should produce eighbornay", () => {
  expect(translate("neighbor")).toEqual("eighbornay");
});

//Translating "complete" to Pig Latin.
test("complete should produce ompletecay", () => {
  expect(translate("complete")).toEqual("ompletecay");
});

//Translating "complete" to Pig Latin.
test("SMALL should produce mallsay", () => {
  expect(translate("SMALL")).toEqual("mallsay");
});
