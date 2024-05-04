import movies from '../Data/movieList.js';

// Function to generate HTML for a single movie
function generateMovieItem(movie) {
    return `
    <div class="movie-item">
        <img src="${movie.image}" alt="${movie.title}">
        <div class="movie-details">
            <h2>${movie.title}</h2>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <strong>Description:</strong>
            <p id="description"> ${movie.description}</p>
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


document.addEventListener("DOMContentLoaded", function() {
    var maxLength = 150; // Maximum number of characters
    var descriptionElement = document.getElementById("description");
    var descriptionText = descriptionElement.textContent;

    // Truncate the text if it exceeds the maximum length
    if (descriptionText.length > maxLength) {
        var truncatedText = descriptionText.substring(0, maxLength) + "...";
        descriptionElement.textContent = truncatedText;
    }
});