const API_KEY = 'cd049bc7';
const API_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (query) => {
    const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${query}`);
    const data = await response.json();
    return data.Search || [];
};

export const fetchMovieDetails = async (id) => {
    const response = await fetch(`${API_URL}?apikey=${API_KEY}&i=${id}`);
    const data = await response.json();
    return data;
};
