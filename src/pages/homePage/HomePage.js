import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getPopularList, imgPoster } from '../../services/movieApi';
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
                            {popMovie.profile_path && (
                                <img
                                    src={imgPoster + popMovie.poster_path}
                                    alt={popMovie.title}
                                />
                            )}
                            <Link to={{ pathname: `/movies/${popMovie.id}` }} className="navigation-link">

                                {popMovie.title} ({popMovie.release_date})

                            </Link>

                        </li>
                    ))}
                </ul>
            </HomePageWrapper>
        )
    }
}

