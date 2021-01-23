import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getPopularList } from '../services/movieApi';

export default class HomePage extends Component {
    state = {
        popularDayMovies: [],
    }
    componentDidMount() {
        getPopularList()
            .then(popularDayMovies => {
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
                            <Link to={{ pathname: `/movies/${popMovie.id}` }}>
                                {popMovie.title} ({popMovie.release_date})
                            </Link>
                            {/* <h2>{popMovie.title} ({popMovie.release_date})</h2>
                            <h3>Rating: {popMovie.vote_count}</h3>
                            <p>{popMovie.overview}</p> */}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

