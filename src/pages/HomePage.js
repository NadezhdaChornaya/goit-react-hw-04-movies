import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getPopularList, imgPoster } from '../services/movieApi';

export default class HomePage extends Component {
    state = {
        popularDayMovies: [],
    }
    componentDidMount() {
        getPopularList()
            .then(
                popularDayMovies => {
                    this.setState({ popularDayMovies })
                })

    }

    render() {
        const { popularDayMovies } = this.state;
        return (
            <div>
                <h1>The most popular movies today</h1>
                <ul>
                    {popularDayMovies.map((popMovie) => (
                        <li key={popMovie.id}>
                            {popMovie.profile_path && (
                                <img
                                    src={imgPoster + popMovie.poster_path}
                                    alt={popMovie.title}
                                />
                            )}
                            <Link to={{ pathname: `/movies/${popMovie.id}` }}>

                                {popMovie.title} ({popMovie.release_date})

                            </Link>

                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

