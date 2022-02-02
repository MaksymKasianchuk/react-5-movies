import React, { Component } from 'react';
import moviesApi from '../../services/movies-api';

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
                    <ul>
                        {
                            cast.map(({ id, character, original_name, profile_path}) => (
                                <li key={id}>
                                    <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={original_name} />
                                    <p>Name: {original_name}</p>
                                    <p>Caracter: {character}</p>
                                </li>
                            ))
                        }
                    </ul>
            )
        );
    }
}

export default Cast;