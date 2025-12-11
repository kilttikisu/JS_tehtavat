'use strict';

const input = prompt('Enter a year:');
const year = parseInt(input);

let message;

if (year % 400 === 0) {
  message = year + ' is a leap year.';
} else if (year % 100 === 0) {
  message = year + ' is not a leap year.';
} else if (year % 4 === 0) {
  message = year + ' is a leap year.';
} else {
  message = year + ' is not a leap year.';
}

document.querySelector('#year').innerHTML = message;
