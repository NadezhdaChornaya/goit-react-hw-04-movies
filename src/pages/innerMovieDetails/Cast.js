import React, { Component } from 'react'
import { getCast, imgCast } from '../../services/movieApi'

export default class Cast extends Component {
    state = {
        castMovie: [],
    }
    componentDidMount() {
        const { match } = this.props;
        getCast(match.params.movieId)
            .then(castMovie => {
                this.setState({
                    castMovie: castMovie,
                });
            })
            .catch(error => {
                this.setState({ error });
            });
    }

    render() {
        const { castMovie } = this.state;
        return (
            <div>
                <h1>Cast</h1>
                <ul>
                    {castMovie && castMovie.cast && castMovie.cast.map((actorInfo) => (
                        <li key={actorInfo.id}>
                            {actorInfo.profile_path && (
                                <img
                                    src={imgCast + actorInfo.profile_path}
                                    alt={actorInfo.name}
                                />
                            )}
                            <h3>{actorInfo.name}</h3>
                            <p>The character: {actorInfo.character}</p>
                        </li>
                    )
                    )}
                </ul>
                {/* <h2>Crew</h2>
                <ul>
                    {castMovie && castMovie.crew && castMovie.crew.map((crewInfo) => (
                        <li key={crewInfo.id}>
                            <h3>{crewInfo.name}</h3>
                            <p>Job: {crewInfo.job}</p>
                        </li>
                    ))}
                </ul> */}
            </div>
        )
    }
}


// const Cast = () => {
//     return (
//         <div>
//             <h1>Cast</h1>
//             <p>Helloooooo</p>
//         </div>
//     )
// }
// export default Cast