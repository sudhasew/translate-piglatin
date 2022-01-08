//TRANSLATING THE VOWELS , CONSONANTS AND SENTENCE TO PIG LATIN.

const functions = require("./piglatin");

//Words starting with consonants.
describe("translate", () => {
  test("banana should produce ananabay", () => {
    expect(functions.translate("banana")).toEqual("ananabay");
  });

  test("giraffe should produce iraffegay", () => {
    expect(functions.translate("giraffe")).toEqual("iraffegay");
  });

  test("sunshine should produce unshinesay", () => {
    expect(functions.translate("SUNSHINE")).toEqual("unshinesay");
  });

  test("sun should produce unsay", () => {
    expect(functions.translate("sun")).toEqual("unsay");
  });
});

//Words starting with vowels.
describe("translate", () => {
  test("apple should produce appleway", () => {
    expect(functions.translate("apple")).toEqual("appleway");
  });

  test("else should produce elseway", () => {
    expect(functions.translate("else")).toEqual("elseway");
  });

  test("indigo should produce indigoway", () => {
    expect(functions.translate("INDIGO")).toEqual("indigoway");
  });

  test("orange should produce orangeway", () => {
    expect(functions.translate("orange")).toEqual("orangeway");
  });

  test("umbrella should produce umbrellaway", () => {
    expect(functions.translate("umbrella")).toEqual("umbrellaway");
  });
});

//Sentence translating to piglatin

describe("translateSentence", () => {
  test("This sentence should produce umbrellaway isway edray inway olorcay ", () => {
    expect(functions.translateSentence("umbrella is red in color")).toEqual(
      "umbrellaway isway edray inway olorcay"
    );
  });
  test("This sentence should produce iway amway hetay eryvay odelmay ofway away odernmay ajormay eneralgay", () => {
    expect(
      functions.translateSentence(
        "I am the very model of a modern Major GENERAL"
      )
    ).toEqual(
      "iway amway hetay eryvay odelmay ofway away odernmay ajormay eneralgay"
    );
  });
});
