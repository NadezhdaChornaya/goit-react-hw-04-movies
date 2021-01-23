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

export { getSearchMovies, getMovieDetails, getPopularList }
// const fetchMovieDetails = movieId => {
//     return fetch(`${baseURL}`)
//         .then(res => res.json())
// }

// const fetchMovieQuery = searchQuery => {
//     return fetch(baseURL)
//         .then(res => res.json())
//         .then(res => res.map(res.movie))
// }

// export const searchMovies = (query = '', pageNumber = 1) => {
//     return fetch(
//         `https://api.themoviedb.org/3/search/movie?api_key=87547ad0a5cfee0fba05460a073a9eb9&query=${query}&page=${pageNumber}`,
//     )
//         .then(res => res.json())
//         .then(data => data.results);
// };

// export const getTrending = () => {
//     return fetch(
//         `https://api.themoviedb.org/3/trending/movie/day?api_key=87547ad0a5cfee0fba05460a073a9eb9`,
//     )
//         .then(res => res.json())
//         .then(data => data.results);
// };
// export const getMovieDetales = id => {
//     return fetch(
//         `https://api.themoviedb.org/3/movie/${id}?api_key=87547ad0a5cfee0fba05460a073a9eb9`,
//     ).then(res => res.json());
// };
// export const getMovieCredits = id => {
//     return fetch(
//         `https://api.themoviedb.org/3/movie/${id}/credits?api_key=87547ad0a5cfee0fba05460a073a9eb9`,
//     ).then(res => res.json());
// };
// export const getMovieReviews = id => {
//     return fetch(
//         `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=87547ad0a5cfee0fba05460a073a9eb9`,
//     )
//         .then(res => res.json())
//         .then(data => data.results);
// };
// export const imgpath = 'https://image.tmdb.org/t/p/w185';
// export const posterimgpath = `https://image.tmdb.org/t/p/w342/`;
