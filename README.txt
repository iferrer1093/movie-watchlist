Github Repo: https://github.com/iferrer1093/movie-watchlist
The movie properties are title (string), genre (string), and watched (boolean)
The methods are toggleWatched(index) which flip the watched boolean value between true and false depending on if the watched button has been clicked and removeMovie(index) which will delete a movie from the movies array using .splice()
Saving works by converting the movies array into a JSON string and saving it to the browsers local storage. Loading works by getting that string when the website starts and parses it back into data which will then load the list. 
