import React, { Component } from 'react';
import moviesApi from '../services/movies-api';
import { Link } from 'react-router-dom';

class HomeView extends Component {

    state = {
        movies: [],
    };

    async componentDidMount(){
        const movies = await moviesApi.fetchTrendMovies()
        this.setState({movies});
    };

    render() {
        const { movies } = this.state;
        return (
            movies && (
                <ul>
                    {
                        movies.map((movie) => (
                            <li key={movie.id}>
                                <Link to={{
                                    pathname: `/movies/${movie.id}`,
                                    state: { from: this.props.location },
                                }}>
                                    {movie?.title || movie?.original_title || movie?.original_name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            )
        );
    };
}

export default HomeView;