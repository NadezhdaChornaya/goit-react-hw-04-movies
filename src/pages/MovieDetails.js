import React from 'react'

const MovieDetails = ({ match }) => {
    return (
        <div>
            <h1>Movie{match.params.movieId}</h1>
        </div>
    )
}
export default MovieDetails