'use strict';

const form = document.querySelector('#tv-form');
const resultsDiv = document.querySelector('#results');
const defaultImage = 'https://placehold.co/210x295?text=Not%20Found';

form.addEventListener('submit', async function(evt) {
    evt.preventDefault(); // prevent page reload
    const query = document.querySelector('#query').value.trim();
    if (!query) return;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        console.log(data); // print full search result to console

        // Clear previous results
        resultsDiv.innerHTML = '';

        // Display results
        data.forEach(item => {
            const show = item.show;
            const imageSrc = show.image ? show.image.medium : defaultImage;

            const article = document.createElement('article');
            const title = document.createElement('h2');
            title.textContent = show.name;

            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = show.name;

            const summary = document.createElement('p');
            summary.innerHTML = show.summary ? show.summary : 'No description available';

            article.appendChild(title);
            article.appendChild(img);
            article.appendChild(summary);

            resultsDiv.appendChild(article);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
        resultsDiv.innerHTML = '<p>Something went wrong. Please try again.</p>';
    }
});
