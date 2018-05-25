// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let values = {};
  str.split('').map( char => {
    !values[char] ? values[char] = 1 : values[char]++ ;
  });
  debugger;
  return Object.keys(values).reduce((a, b) => values[a] > values[b] ? a : b);
}

maxChar("ab");
module.exports = maxChar;
