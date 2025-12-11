"use strict";

const dogs = [];

for (let i = 0; i < 6; i++) {
    const dogName = prompt(`Enter the name of dog ${i + 1}:`);
    dogs.push(dogName);
}

dogs.sort();
dogs.reverse();

document.write("<ul>");
for (const dog of dogs) {
    document.write(`<li>${dog}</li>`);
}
document.write("</ul>");
