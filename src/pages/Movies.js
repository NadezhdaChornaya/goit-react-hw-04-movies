import React from 'react'
import { Link } from 'react-router-dom';

const movie = [
    { id: 1, name: 'fffff' },
    { id: 2, name: 'gggggg' },
]

const Movies = ({ match }) => {
    return (
        <div>
            <ul>
                {movie.map((mov) => {
                    return <li key={mov.id}><Link to={`${match.url}/${mov.id}`}>{mov.name}</Link></li>
                })}

            </ul>
        </div>
    )
}
export default Movies