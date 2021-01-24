import React, { Component, Suspense } from 'react'
import { getMovieDetails, imgPoster } from '../services/movieApi';
import { Route, Link, Switch } from 'react-router-dom';
import { routesInnerPages } from '../routes';
import { Spinner } from '../components/Loader';

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

    handleGoBack = () => {
        const { state } = this.props.location;
        if (state && state.from) {
            return this.props.history.push(state.from)
        }
        this.props.history.push("/")
    }

    render() {
        const { movie } = this.state;
        const { match } = this.props;
        return (
            <div>
                <button type="button" onClick={this.handleGoBack}>Go back</button>
                {this.state.movie &&
                    <>

                        {movie.poster_path && <img scr={imgPoster + movie.poster_path} alt={movie.title} />}
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
                <Suspense fallback={<Spinner />}>
                    <Switch>
                        {routesInnerPages.map(({ path, exact, component }) => (
                            <Route key={path} exact={exact} path={match.path + path} component={component} />
                        ))}
                    </Switch>
                </Suspense>
            </div >
        )
    }
}