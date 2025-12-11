'use strict';

async function getChuckNorrisJoke() {
    console.log('Fetching a Chuck Norris joke...');
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log(data.value);
    } catch (error) {
        console.error('Error fetching joke:', error.message);
    } finally {
        console.log('Joke fetch complete');
    }
}

getChuckNorrisJoke().catch(err => console.error(err));
