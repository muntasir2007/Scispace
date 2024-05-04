import movies from '../Data/movieList.js';

// Function to generate HTML for a single movie
function generateMovieItem(movie) {
    return `
    <div class="movie-item">
        <img src="${movie.image}" alt="${movie.title}">
        <div class="movie-details">
            <h2>${movie.title}</h2>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Description:</strong> ${movie.description}</p>
            <a href="./movie-details.html?title=${encodeURIComponent(movie.title)}" class="view-details-link">View Details</a>
        </div>
    </div>
    `;
}

// Function to render the movie list



function renderMovieList() {
    const movieListContainer = document.getElementById('movieListContainer');
    let movieHTML = '';

    movies.forEach(movie => {
        movieHTML += generateMovieItem(movie);
    });

    movieListContainer.innerHTML = movieHTML;
}

// Render the movie list when the page loads
document.addEventListener('DOMContentLoaded', renderMovieList);