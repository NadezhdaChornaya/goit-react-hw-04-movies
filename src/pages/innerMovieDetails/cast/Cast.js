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
                {castMovie.length === 0 && (<h2 className="castText">We don't have any info about actors for this movie</h2>)}

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