import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getSearchMovies } from '../services/movieApi';


export default class MoviesPage extends Component {
    state = {
        movies: [],
        searchQuery: '',
        page: 1,
    }

    componentDidMount() {
        getSearchMovies('cat').then(movies =>
            this.setState({ movies })
        )
    }
    render() {
        const { movies } = this.state;
        const { match } = this.props;
        return (
            <div>
                {movies.length > 0 &&
                    <ul>
                        {movies.map((mov) => {
                            return <li key={mov.id}><Link to={`${match.url}/${mov.id}`}>{mov.title}</Link></li>
                        })}

                    </ul>}

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