import React, { Component } from 'react';
import moviesApi from '../services/movies-api';
import Searchbar from '../components/Searchbar';
import Loader from '../components/Loader';
import Button from '../components/Button';
import MoviesList from '../components/MoviesList';

class MoviesView extends Component {
    state = {
        movies: [],
        searchQuery: null,
        currentPage: 1,
        isLoading: false,
        errorMessage: null,
    }

    componentDidUpdate( prevProps, prevState){
        if(prevState.searchQuery !== this.state.searchQuery){
            this.fetchMovies();
        }
    };

    onChangeQuery = query =>{
        this.setState({
            searchQuery: query,
            currentPage: 1,
            movies: [],
            errorMessage: null
        });
    };

    fetchMovies = () => {
        const { currentPage, searchQuery } = this.state;
        const options = {searchQuery, currentPage};
        
        this.setState({ isLoading: true });
        
        moviesApi.fetchMoviesByQuery(options)
        .then(movies => {
            this.setState(prevState => ({
                movies: [...prevState.movies, ...movies],
                currentPage : prevState.currentPage + 1
            }))
        })
        .catch(errorMessage => this.setState({ errorMessage }))
        .finally(() => this.setState({ isLoading: false }));
    };

    render() {
        const {  movies, isLoading, errorMessage } = this.state;
        const shouldRenderLoadMoreButton = movies.length > 0 && !isLoading;
    
        return (
            <div>
                { errorMessage && <h1>Error: {errorMessage}</h1> }
                <Searchbar onSubmit={this.onChangeQuery} />
                {isLoading && (<Loader/>)}

                {
                    movies.length > 0 && <MoviesList movies={movies} {...this.props}/>
                }

                {shouldRenderLoadMoreButton && (
                <Button onClick={this.fetchMovies} />
                )}
            </div>
        );
    }
}

export default MoviesView;