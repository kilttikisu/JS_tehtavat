'use strict';

const form = document.getElementById('searchForm');
const input = document.getElementById('query');

form.addEventListener('submit', async function(evt) {
    evt.preventDefault(); // Prevent page reload

    const searchTerm = input.value.trim();
    if (!searchTerm) return;

    console.log(`Searching for TV series: ${searchTerm}`);

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchTerm)}`);
        if (!response.ok) throw new Error('Network response was not OK');

        const results = await response.json();
        console.log('Full search result:', results);

        // Optional: Print each show in a readable format
        results.forEach(item => {
            console.log('------------------------');
            console.log('Title:', item.show.name);
            console.log('Genres:', item.show.genres.join(', '));
            console.log('Status:', item.show.status);
            console.log('Premiered:', item.show.premiered);
            console.log('Summary:', item.show.summary ? item.show.summary.replace(/<[^>]+>/g, '') : 'No summary'); // strip HTML
        });
    } catch (error) {
        console.error('Error fetching TV series:', error.message);
    }
});
