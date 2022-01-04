function translate(str) {
  str = str.toLowerCase();
  return str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1way");
}
module.exports = translate;
