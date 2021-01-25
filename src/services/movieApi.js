const key = '157a8dab0fd833a1e20329cd301ddb1e';

const baseURL = `https://api.themoviedb.org/`

const getSearchMovies = (query = '', pageNumber = 1) => {
    return fetch(`${baseURL}3/search/movie?api_key=${key}&query=${query}&language=en-US&page=1&include_adult=false`)
        .then(res => res.json())
        .then(data => data.results)
}

const getMovieDetails = (movieId) => {
    return fetch(`${baseURL}3/movie/${movieId}?api_key=${key}&language=en-US`)
        .then(res => res.json())
}

const getPopularList = () => {
    return fetch(`${baseURL}3/trending/movie/day?api_key=${key}`)
        .then(res => res.json())
        .then(data => data.results)
}

const getCast = (movieId) => {
    return fetch(`${baseURL}3/movie/${movieId}/credits?api_key=${key}&language=en-US`)
        .then(res => res.json())
}

const getMovieReviews = (movieId) => {
    return fetch(`${baseURL}3/movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`)
        .then(res => res.json())
}

const imgCast = 'https://image.tmdb.org/t/p/w300';
const imgPoster = 'https://image.tmdb.org/t/p/w500';

export { getSearchMovies, getMovieDetails, getPopularList, getCast, getMovieReviews, imgCast, imgPoster }
