import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getSearchMovies, } from '../../services/movieApi';
import getQueryParams from '../../utils/getQueryString';
import SearchForm from '../../components/searchForm/SearchForm';
import { Ul } from './styledMoviePages';


export default class MoviesPage extends Component {
    state = {
        movies: [],
        page: 1,
        loading: false,
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
            this.fetchMovies(nextQuery)
        }
    }

    fetchMovies = (fetchQuery) => {
        // this.setState((prevState) => ({ ...prevState, loading: true }))
        getSearchMovies(fetchQuery)
            .then(movies =>
                this.setState({ movies }))
            .catch(error => alert(error))
        // .finally(() => this.setState((prevState) => ({ ...prevState, loading: false })))
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
