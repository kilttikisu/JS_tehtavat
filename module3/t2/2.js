'use strict';

const target = document.getElementById('target');

const li1 = document.createElement('li');
li1.innerText = 'First item';

const li2 = document.createElement('li');
li2.innerText = 'Second item';
li2.classList.add('my-item');

const li3 = document.createElement('li');
li3.innerText = 'Third item';

target.appendChild(li1);
target.appendChild(li2);
target.appendChild(li3);
