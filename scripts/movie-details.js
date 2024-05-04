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
            <div class="image-section">
                <img src="${selectedMovie.image}" alt="${selectedMovie.title}">
                <div class="image-overlay">
                    <h2>${selectedMovie.title}</h2>
                    ${selectedMovie.releaseYear}
                    ${selectedMovie.genre}
                </div>
            </div>
            <p><strong>Status:</strong> ${selectedMovie.status}</p>
            <p><strong>Director:</strong> ${selectedMovie.director}</p>
            <p><strong>Number of Episodes:</strong> ${selectedMovie.episodeNumber.join(', ')}</p>
            <p><strong>Parts:</strong> ${selectedMovie.parts.join(', ')}</p>

            <p><strong>Description:</strong> ${selectedMovie.description}</p>
        `;
    } else {
        movieDetailsContainer.innerHTML = `<p>Movie not found!</p>`;
    }
});