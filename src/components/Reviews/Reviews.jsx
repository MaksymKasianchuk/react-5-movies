import React, { Component } from 'react';
import moviesApi from '../../services/movies-api';

class Reviews extends Component {
    state = {
        reviews: [],
    };

    async componentDidMount(){
        const movieId = Number(this.props.match.params.movieId);
        const reviews = await moviesApi.fetchMovieReviews({ movieId });
        this.setState({ reviews });
    };

    render() {
        const { reviews } = this.state;
        return (
            (
                reviews.length > 0 ? (
                    <ul>
                        {
                            reviews.map(({ id, author, author_details, content}) => (
                                <li key={id}>
                                    <img src={author_details?.avatar_path || ""} alt={author} />
                                    <p>Name: {author}</p>
                                    <p>Review: {content}</p>
                                </li>
                            ))
                        }
                    </ul>
                ) : (
                    <p>Nothing Here</p>
                )

            )
        );
    }
}

export default Reviews;