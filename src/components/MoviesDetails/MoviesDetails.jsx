import React from 'react';
import PropTypes from 'prop-types';
import styles from './MoviesDetails.module.scss';

const MoviesDetails = ({ title,
    original_title,
    poster_path,
    overview,
    release_date,
    vote_average,
    handleGoBack}) => {
  
    return (
        <div className={styles.MoviesDetails}>
            <div className={styles.MoviesDetailsLeft}>
                <button type='button' onClick={handleGoBack} className={styles.GoBackBtn}>Go back</button>
                <div className={styles.Thumb}>
                    <img src={poster_path} alt={title} />
                    <div>{vote_average}</div>
                </div>
            </div>
            <div className={styles.MoviesDetailsRight}>
                <h1>{title ? title : original_title}</h1>
                <p className={styles.Release}>Release date: {release_date}</p>
                <p className={styles.Overview}>{overview}</p>
            </div>
        </div>
    );
};

MoviesDetails.propTypes = {
    title: PropTypes.string,
    original_title: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    handleGoBack: PropTypes.func.isRequired
};

export default MoviesDetails;