// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger;
  return str.split('').reverse().join('');
}

function reverse2(str) {
  let newStr = '';
  str.split('').map( s => newStr = s + newStr);
  return newStr;
}

const reverse3 = str => {
  let newStr = '';
  for (let character of str){
    newStr = character + newStr;
    debugger;
  }
  return newStr;
}

const reverse4 = str => {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}

// reverse4 one liner

const reverse5 = str => str.split('').reduce((reversed, character) => character + reversed, '');

//reverse3('assssaaaas');

module.exports = reverse3;
