const form = document.getElementById("movie-form");
const titleInput = document.getElementById("titleInput");
const genreSelect = document.getElementById("genreSelect");
const message = document.getElementById("form-message");
const movieList = document.getElementById("movie-list");
const emptyMessage = document.getElementById("empty-message");

const watchlist = {
    movies: [],
    toggleWatched(index) {
        // TODO (Step 4)
    },
    removeMovie(index) {
        // TODO (Step 4)
    }
};

function saveMovies() {
    // TODO (Step 6)
}

function loadMovies() {
    // TODO (Step 6)
}

function renderMovies() {
    // TODO (Step 3)
}

form.addEventListener("submit", (event) => {
    // TODO (Step 5)
});

loadMovies();
renderMovies();