import React, { Component } from 'react'
import { getCast, imgCast } from '../../../services/movieApi'
import { CastWrapper } from './styledCast';

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
            <CastWrapper>
                <h1 className="castTitle">Cast</h1>
                <ul className="castList">
                    {castMovie && castMovie.cast && castMovie.cast.map((actorInfo) => (
                        <li key={actorInfo.id} className="castItem">
                            {actorInfo.profile_path && (
                                <img
                                    src={imgCast + actorInfo.profile_path}
                                    alt={actorInfo.name}
                                />
                            )}
                            <h3 className="castName">{actorInfo.name}</h3>
                            <p className="castCharacter">The character: {actorInfo.character}</p>
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
            </CastWrapper>
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