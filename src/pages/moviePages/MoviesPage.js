import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getSearchMovies, imgCast } from '../../services/movieApi';
import getQueryParams from '../../utils/getQueryString';
import SearchForm from '../../components/searchForm/SearchForm';
import { Ul } from './styledMoviePages';


export default class MoviesPage extends Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        const { query } = getQueryParams(this.props.location.search);
        if (query) {
            this.fetchMovies(query)
            return;
        }

    }
    componentDidUpdate(prevProps, prevState) {
        const { query: prevQuery } = getQueryParams(prevProps.location.search)
        const { query: nextQuery } = getQueryParams(this.props.location.search)
        if (prevQuery !== nextQuery) {
            return this.fetchMovies(nextQuery)
        }
        if (this.state.movies.length === 0) {
            alert('Try another request')
        }
    }

    fetchMovies = (fetchQuery) => {
        getSearchMovies(fetchQuery)
            .then(movies =>
                this.setState({ movies }))
            .catch(error => alert(error))

    }

    handgeChangeQuery = (query) => {
        this.props.history.push(
            {
                pathname: this.props.location.pathname,
                search: `query=${query}`
            }
        )
    }
    render() {
        const { movies } = this.state;
        const { match } = this.props;
        return (
            <div>
                <SearchForm onSubmit={this.handgeChangeQuery} />
                {
                    movies.length > 0 &&
                    <Ul>
                        {movies.map((mov) => {
                            return <li key={mov.id} className="moviePageItem">
                                <Link to={{ pathname: `${match.url}/${mov.id}`, state: { from: this.props.location } }} className="moviePageLink">
                                    {mov.poster_path &&
                                        <img src={imgCast + mov.poster_path} alt={mov.title}
                                            className="moviePagePoster" />}
                                    {mov.title}
                                </Link>
                            </li>
                        })}

                    </Ul>
                }

            </div>
        )
    }
}

