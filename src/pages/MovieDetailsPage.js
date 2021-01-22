import React, { Component } from 'react'
import { getMovieDetails } from '../services/movieApi';
import { Route, Link, Switch } from 'react-router-dom';
import Cast from './innerMovieDetails/Cast';
import Reviews from './innerMovieDetails/Reviews';

export default class MovieDetailsPage extends Component {
    state = {
        movie: null
    }
    componentDidMount() {
        const { match } = this.props;
        getMovieDetails(match.params.movieId)
            .then(movie =>
                this.setState({ movie: movie }))
    }

    render() {
        const { movie } = this.state;
        const { match } = this.props;
        return (
            <div>

                {this.state.movie &&
                    <>

                        {/* <img scr={movie.poster_path} alt={movie.title} /> */}
                        <h1>{movie.title} ({movie.release_date})</h1>
                        <h2>{movie.popularity}</h2>
                        <p>{movie.tagline}</p>
                        <p>{movie.overview}</p>
                        <p>{movie.runtime}</p>



                        <p>Additional information</p>
                        <Link to={`${match.url}/${movie.id}/cast`}>
                            Cast
                    </Link>
                        <br />
                        <Link to={{ pathname: `${match.url}/${movie.id}/reviews` }}>
                            Reviews
                    </Link>
                    </>}
                <Switch>
                    <Route path={`${match.path}/:movieId/cast`} component={Cast} />
                    <Route path={`${match.path}/:movieId/reviews`} component={Reviews} />
                </Switch>
            </div >
        )
    }
}




// import React from 'react'

// const MovieDetailsPage = ({ match }) => {
//     return (
//         <div>
//             <h1>Movie{match.params.movieId}</h1>
//         </div>
//     )
