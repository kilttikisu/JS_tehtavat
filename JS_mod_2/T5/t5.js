"use strict";

const numbers = [];
let input;

while (true) {
    input = Number(prompt("Enter a number:"));

    if (numbers.includes(input)) {
        console.log(`The number ${input} has already been given.`);
        break;
    } else {
        numbers.push(input);
    }
}

numbers.sort((a, b) => a - b);

console.log(" numbers in order from smallest to biggest:");
for (let num of numbers) {
    console.log(num);
}
