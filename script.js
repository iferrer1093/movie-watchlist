const form = document.getElementById("movie-form");
const titleInput = document.getElementById("titleInput");
const genreSelect = document.getElementById("genreSelect");
const message = document.getElementById("form-message");
const movieList = document.getElementById("movie-list");
const emptyMessage = document.getElementById("empty-message");

const watchlist = {
    movies: [{ title: "Shrek", genre: "Adventure", watched: false }],
    toggleWatched(index) {
        // TODO (Step 4)
        this.movies[index].watched = !this.movies[index].watched;
    },
    removeMovie(index) {
        // TODO (Step 4)
        this.movies.splice(index, 1)
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
    movieList.replaceChildren();

    watchlist.movies.forEach((movie, index) => {
        const card = document.createElement("li");
        const title = document.createElement("h3");
        title.textContent = movie.title;

        const details = document.createElement("p");
        // TODO: Show the genre and Watched / Not watched status.
        const watchStatus = movie.watched ? "Watched" : "Not watched";
        details.textContent = `${movie.genre} and ${watchStatus}`;

        const toggleButton = document.createElement("button");
        toggleButton.type = "button";
        // TODO: Set Mark Watched / Mark Unwatched as the button text.
        toggleButton.textContent = movie.watched ? "Mark Unwatched" : "Mark Watched";
        toggleButton.addEventListener("click", () => {
            watchlist.toggleWatched(index);
            saveMovies();
            renderMovies();
        });

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            watchlist.removeMovie(index);
            saveMovies();
            renderMovies();
        });
        card.append(title, details, toggleButton, removeButton);
        movieList.append(card);
    })

    // TODO: Show your empty-list message when the array is empty.
    if (watchlist.movies.length === 0) {
        emptyMessage.textContent = "Your watchlist is empty. Add a movie to get started.";
    } else {
        emptyMessage.textContent = "";
    }
}

form.addEventListener("submit", (event) => {
    // TODO (Step 5)
    event.preventDefault();
    const trimmedTitle = titleInput.value.trim();
    const genreSelection = genreSelect.value;

    if (trimmedTitle === "") {
        message.textContent = "Enter a movie title.";
        return;
    }

    if (genreSelection === "") {
        message.textContent = "Choose a genre.";
        return;
    }

    watchlist.movies.push({
        title: trimmedTitle,
        genre: genreSelection,
        watched: false
    });

    saveMovies();
    renderMovies();
    message.textContent = "";
    titleInput.value = "";
    genreSelect.value = "";
});

loadMovies();
renderMovies();