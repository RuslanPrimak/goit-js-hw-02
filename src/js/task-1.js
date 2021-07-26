'use strict';

console.log('========================= Task 1 =========================');

const logItems = function (array) {
  for (let index = 0; index < array.length; index++) {
    console.log(`${index + 1} - ${array[index]}`);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
console.log('----');
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
