import React from 'react';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.scss';
import { Link } from 'react-router-dom';
import placeholder from '../../img/404.webp';

const MoviesList = ({ movies, location}) => {
    return (
        <ul className={styles.MoviesList}>
        {
            movies.map((movie) => (
                <li key={movie.id} className={styles.MoviesListItem}>
                    <Link to={{
                        pathname: `/movies/${movie.id}`,
                        state: { from: location },
                    }} className={styles.MoviesListLink}>
                        <div className={styles.Thumb}>
                            <img src={movie?.poster_path ? `https://image.tmdb.org/t/p/w500/${movie?.poster_path}` : placeholder} alt={movie?.title} className={styles.MoviesListImg}/>
                            <div className={styles.MoviesListVote}>{movie.vote_average}</div>
                        </div>
                        <p className={styles.MoviesListTitle} >{movie?.title || movie?.original_title || movie?.original_name}</p>
                    </Link>
                </li>
            ))
        }
        </ul>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
    location: PropTypes.object
};

export default MoviesList;