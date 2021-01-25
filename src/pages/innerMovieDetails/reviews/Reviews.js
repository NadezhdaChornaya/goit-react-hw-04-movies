import React, { Component } from 'react';
import { getMovieReviews } from '../../../services/movieApi';
import { ReviewsWrapper } from './styledReviews';

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
            .catch(error => alert(error));

    }

    render() {
        const { reviews } = this.state;
        return (
            <ReviewsWrapper>
                <h1 className="reviewTitle">Reviews</h1>

                {reviews.lengs>0 ?
                    (<ul className="reviewList">
                    {reviews.map((review) => (
                        <li key={review.id} className="reviewItem">
                            <h2 className="reviewAuthor">Author: {review.author}</h2>
                            <p className="reviewText">{review.content}</p>
                            <p className="reviewCreated">Created at: {review.created_at}</p>
                        </li>
                    ))}
                </ul>
                    )
                : (
        <p className="reviewText"> We don't have any reviews for this movie.</p>
      )}

            </ReviewsWrapper >
        )
    }
}


