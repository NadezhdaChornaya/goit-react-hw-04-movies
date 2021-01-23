import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getSearchMovies, } from '../services/movieApi';
import getQueryParams from '../utils/getQueryString';
import SearchForm from '../components/SearchForm';


export default class MoviesPage extends Component {
    state = {
        movies: [],
        searchQuery: '',
        page: 1,
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
        getSearchMovies(fetchQuery).then(movies =>
            this.setState({ movies })
        )
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
                    <ul>
                        {movies.map((mov) => {
                            return <li key={mov.id}>
                                <Link to={{ pathname: `${match.url}/${mov.id}`, state: { from: this.props.location } }}>
                                    {mov.title}
                                </Link>
                            </li>
                        })}

                    </ul>
                }

            </div>
        )
    }
}


// const movie = [
//     { id: 1, name: 'fffff' },
//     { id: 2, name: 'gggggg' },
// ]

// const MoviesPage = ({ match }) => {
//     return (

//     )
// }
// export default MoviesPage