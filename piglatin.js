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
const functions = {
  // Arrow function
  vowel: function translate(str) {
    str = str.toLowerCase();
    return str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1way");
  },
  consonant: function translate(str) {
    str = str.toLowerCase();
    return str.replace(/\b(\w)(\w+)\b/g, "$2$1ay");
  },
};
module.exports = functions;
