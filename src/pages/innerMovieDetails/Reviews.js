import React, { Component } from 'react';
import { getMovieReviews } from '../../services/movieApi';

export default class Reviews extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        const { match } = this.props;
        getMovieReviews(match.params.movieId)
            .then(reviews => {
                // console.log(reviews)
                this.setState({
                    reviews: reviews,
                });
            })
            .catch(error => {
                this.setState({ error });
            });
    }

    render() {
        const { reviews } = this.state;
        return (
            <div>
                <h1>Reviews</h1>

                {reviews.length > 0 && reviews.result.length > 0 ?
                    (<ul>
                        {reviews.results.map((review) => (
                        <li key={review.id}>
                            <h2>{review.author}</h2>
                            <p>{review.content}</p>
                            <p>Created at: {review.created_at}</p>
                        </li>
                    ))}
                    </ul>
                    ) :(
        <p> We don't have any reviews for this movie.</p>
      )}

            </div >
        )
    }
}


