'use strict';

console.log('========================= Task 3 =========================');

const findLongestWord = function (string) {
  let longestWord = '';

  for (const word of string.split(' ')) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
