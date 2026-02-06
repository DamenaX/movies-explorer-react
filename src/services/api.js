const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";


async function getPopularMovies() {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

async function searchMovies(query) {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURI(
        query)}`
    );
    const data = await response.json();
    return data.results;
}

export {getPopularMovies, searchMovies};