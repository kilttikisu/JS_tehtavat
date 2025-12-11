'use strict';

const form = document.querySelector('#joke');
const resultsDiv = document.querySelector('#joke-results');

async function searchJokes(query) {
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        resultsDiv.innerHTML = '';
        if (data.result.length === 0) {
            resultsDiv.innerHTML = '<p>No jokes found.</p>';
            return;
        }

        data.result.forEach(joke => {
            const article = document.createElement('article');
            const p = document.createElement('p');
            p.textContent = joke.value;
            article.appendChild(p);
            resultsDiv.appendChild(article);
        });

    } catch (error) {
        resultsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

form.addEventListener('submit', event => {
    event.preventDefault();
    const query = form.query.value.trim();
    if (query) searchJokes(query).catch(err => console.error(err));
});
