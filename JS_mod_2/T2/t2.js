"use strict";

const numParticipants = Number(prompt("Enter the number of participants:"));

const participants = [];

for (let i = 0; i < numParticipants; i++) {
    const name = prompt(`Enter the name of participant ${i + 1}:`);
    participants.push(name);
}

participants.sort();

document.write("<ol>");
for (let i = 0; i < participants.length; i++) {
    document.write(`<li>${participants[i]}</li>`);
}
document.write("</ol>");
