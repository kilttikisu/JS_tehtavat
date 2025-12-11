"use strict";

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

const resultsList = document.getElementById("roll_result");
let roll;

do {
    roll = rollDice();

    const listItem = document.createElement("li");
    listItem.textContent = `Rolled: ${roll}`;
    resultsList.appendChild(listItem);

} while (roll !== 6);

