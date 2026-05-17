const API_KEY = "a601eabd83a234502c5bc61b3e04c8fc";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {

    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (searchTerm) => {

    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}`
    );
    const data = await response.json();
    return data.results;
}