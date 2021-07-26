'use strict';

console.log('========================= Task 6 =========================');

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число: ');
  if (input === null) {
    break;
  }
  if (Number.isNaN(input)) {
    console.log('Было введено не число, попробуйте еще раз');
    continue;
  }
  numbers.push(Number(input));
}

for (const number of numbers) {
  total += number;
}

console.log(`Общая сумма чисел равна ${total}`);
