import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getPopularList, imgCast } from '../../services/movieApi';
import { HomePageWrapper } from './styledHomePage';

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
            <HomePageWrapper>
                <h1 className="homePageTitle">The most popular movies today</h1>
                <ul className="homePageList">
                    {popularDayMovies.map((popMovie) => (
                        <li key={popMovie.id} className="homePageItem">

                            <Link to={{ pathname: `/movies/${popMovie.id}` }} className="navigation-link">
                                {popMovie.poster_path &&
                                    <img src={imgCast + popMovie.poster_path} alt={popMovie.title}
                                        className="homePagePoster" />}
                                {popMovie.title}
                                <br />
                                ({popMovie.release_date})

                            </Link>

                        </li>
                    ))}
                </ul>
            </HomePageWrapper>
        )
    }
}

