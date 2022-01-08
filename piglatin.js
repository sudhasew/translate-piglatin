// function translate(str) {
//   str = str.toLowerCase();
//   var n = str.search(/[aeiuo]/);
//   switch (n) {
//     case 0:
//       str = str + "way";
//       break;
//     case -1:
//       str = str + "ay";
//       break;
//     default:
//       //str= str.substr(n)+str.substr(0,n)+"ay";
//       str = str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
//       break;
//   }
//   return str;
// }

// module.exports = translate;

// ----------------------- OR ----------------------
// const functions = {
//   // Arrow function
//   vowel: function translate(str) {
//     str = str.toLowerCase();
//     return str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1way");
//   },
//   consonant: function translate(str) {
//     str = str.toLowerCase();
//     return str.replace(/\b(\w)(\w+)\b/g, "$2$1ay");
//   },
// };
// module.exports = functions;

// ----------------------- OR ----------------------

function translateSentence(sentence) {
  return sentence
    .split(" ")
    .map((word) => translate(word))
    .join(" ");
}
function translate(word) {
  const vowels = ["a", "e", "i", "o", "u"];

  // Making the word lowercase
  word = word.toLowerCase();
  if (vowels.includes(word[0])) {
    return word + "way";
  } else {
    return word.substr(1) + word[0] + "ay";
  }
}
console.log(translateSentence("I am the very model of a modern Major GENERAL"));

module.exports = { translateSentence, translate };
