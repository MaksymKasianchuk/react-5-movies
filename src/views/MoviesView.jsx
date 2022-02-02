import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moviesApi from '../services/movies-api';
import Searchbar from '../components/Searchbar';
import Loader from '../components/Loader';
import Button from '../components/Button';
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
        console.log(this.state.currentPage, this.state.searchQuery);
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
                }

                {shouldRenderLoadMoreButton && (
                <Button onClick={this.fetchMovies} />
                )}
            </div>
        );
    }
}

export default MoviesView;