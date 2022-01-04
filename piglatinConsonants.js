function translate(str) {
  str = str.toLowerCase();
  return str.replace(/\b(\w)(\w+)\b/g, "$2$1ay");
}
module.exports = translate;
