'use strict';

const n1 = prompt('Enter the first integer:');
const n2 = prompt('Enter the second integer:');
const n3 = prompt('Enter the third integer:');

const num1 = parseInt(n1);
const num2 = parseInt(n2);
const num3 = parseInt(n3);

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / 3;

document.querySelector('#number').innerHTML =
  'Sum: ' + sum + '<br>' +
  'Product: ' + product + '<br>' +
  'Average: ' + average;
