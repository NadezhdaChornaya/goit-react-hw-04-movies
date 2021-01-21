const key = '157a8dab0fd833a1e20329cd301ddb1e';
// example https://api.themoviedb.org/3/movie/550?api_key=157a8dab0fd833a1e20329cd301ddb1e

// API Read Access Token(v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTdhOGRhYjBmZDgzM2ExZTIwMzI5Y2QzMDFkZGIxZSIsInN1YiI6IjYwMDllMDMzMTI2ZWMzMDA0MGZlZGY4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wHfUZgcVIbHPtBHiYSz01lUCD - sXP_TBAxeuM9jcoQo

const baseURL = `https://api.themoviedb.org/3/movie/550?api_key=${key}`

const fetchMovieDetails = movieId => {
    return fetch(`${baseURL}`)
        .then(res => res.json())
}

const fetchMovieQuery = searchQuery => {
    return fetch(baseURL)
        .then(res => res.json())
        .then(res => res.map(res.movie))
}