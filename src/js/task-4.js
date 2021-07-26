'use strict';

console.log('========================= Task 4 =========================');

const formatString = function (string) {
  const maxLength = 40;
  let result = string;

  if (string.length > maxLength) {
    result = string.slice(0, maxLength) + '...';
  }

  return result;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'
  )
);
// вернется форматированная строка
