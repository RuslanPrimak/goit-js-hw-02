'use strict';

console.log('========================= Task 5 =========================');

const checkForSpam = function (message) {
  const string = message.toLowerCase();
  return string.includes('spam') || string.includes('sale');
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
