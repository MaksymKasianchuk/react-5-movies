import React, { Component } from 'react';
import moviesApi from '../../services/movies-api';
import styles from './Reviews.module.scss';

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
                            reviews.map(({ id, author, content}) => (
                                <li key={id} className={styles.RreviewItem}>
                                    <p className={styles.RreviewName}>Name: {author}</p>
                                    <p className={styles.RreviewContent}>Review: {content}</p>
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