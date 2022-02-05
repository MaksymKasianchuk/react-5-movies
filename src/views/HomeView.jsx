import React, { Component } from 'react';
import moviesApi from '../services/movies-api';
import MoviesList from '../components/MoviesList';
import Loader from '../components/Loader';

class HomeView extends Component {

    state = {
        movies: [],
        error: null,
        isLoad: false,
    };

    async componentDidMount(){
        this.setState({isLoad: true});
        const movies = await moviesApi.fetchTrendMovies()
        .catch(error => this.setState({ error }))
        .finally(this.setState({ isLoad: false }));
        this.setState({ movies });
    };

    render() {
        const { movies, error, isLoad } = this.state;
        return (
            <>
            { error && <h1>Error: {error}</h1> }
            { movies.length > 0 && <MoviesList movies={ movies } {...this.props}/> }
            { isLoad && <Loader/> }
            </>
        );
    };
}

export default HomeView;