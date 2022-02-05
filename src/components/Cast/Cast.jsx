import React, { Component } from 'react';
import moviesApi from '../../services/movies-api';
import styles from './Cast.module.scss';
class Cast extends Component {
    state = {
        cast: [],
    };

    async componentDidMount(){
        const movieId = Number(this.props.match.params.movieId);
        const cast = await moviesApi.fetchMovieCast({ movieId });
        this.trimmedCast(cast);
    };
    
    trimmedCast = ( fullCast ) => {
        if(fullCast.length > 10){
            let trimmedCast = [];
            for (let i = 0; i < 10; i++) {
                trimmedCast.push(fullCast[i]);
            }
            this.setState({ cast: [...trimmedCast] });
        }
        else{
            this.setState({ cast: [...fullCast] });
        }
    };

    render() {
        const { cast } = this.state;
        return (
            (
                cast && 
                    <ul className={styles.CastList}>
                        {
                            cast.map(({ id, character, original_name, profile_path}) => (
                                <li key={id} className={styles.CastItem}>
                                    <img className={styles.CastImg} src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={original_name} />
                                    <p className={styles.CastName}>Name: {original_name}</p>
                                    <p className={styles.CastRole}>Caracter: {character}</p>
                                </li>
                            ))
                        }
                    </ul>
            )
        );
    }
}

export default Cast;