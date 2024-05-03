import movies from '../Data/movieList.js';


document.addEventListener('DOMContentLoaded', function() {
    const movieDetailsContainer = document.getElementById('movieDetails');
    
    // Retrieve movie title from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const movieTitle = urlParams.get('title');
    
    // Find the selected movie object from the movies array
    const selectedMovie = movies.find(movie => movie.title === movieTitle);

    // If selected movie found, generate movie details
    if (selectedMovie) {
        movieDetailsContainer.innerHTML = `
            <h2>${selectedMovie.title}</h2>
            <img src="${selectedMovie.image}" alt="${selectedMovie.title}">
            <p><strong>Release Year:</strong> ${selectedMovie.releaseYear}</p>
            <p><strong>Genre:</strong> ${selectedMovie.genre}</p>
            <p><strong>Director:</strong> ${selectedMovie.director}</p>
            <p><strong>Starring:</strong> ${selectedMovie.starring.join(', ')}</p>
            <p><strong>Description:</strong> ${selectedMovie.description}</p>
        `;
    } else {
        movieDetailsContainer.innerHTML = `<p>Movie not found!</p>`;
    }
});