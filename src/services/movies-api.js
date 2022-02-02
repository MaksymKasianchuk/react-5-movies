import axios from "axios";

const API_KEY = '59a503cfafa46b9718571bf9985df846';

const fetchTrendMovies = () =>{
    return axios 
    .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
    )
    .then( response => response.data.results);
};

const fetchMoviesByQuery = ({ searchQuery = '', currentPage = 1}) => {
    return axios
    .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${currentPage}&include_adult=true`,
    )
    .then(response => response.data.results);
};

const fetchMovieById = ({ movieId = 1}) => {
    return axios
    .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    )
    .then(response => response.data);
};

const fetchMovieCast = ({ movieId = 1}) => {
    return axios
    .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    )
    .then(response => response.data.cast);
};

const fetchMovieReviews = ({ movieId = 1, currentPage = 1}) => {
    return axios
    .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${currentPage}`,
    )
    .then(response => response.data.results);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchTrendMovies, fetchMoviesByQuery, fetchMovieById, fetchMovieCast, fetchMovieReviews };