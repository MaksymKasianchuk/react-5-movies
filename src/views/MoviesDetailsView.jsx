import React, { Component } from 'react';
import routes from '../routes';
import moviesApi from '../services/movies-api'; 
import { Route, NavLink, Switch } from 'react-router-dom';
import Reviews from '../components/Reviews';
import Cast from '../components/Cast';

class MoviesDetailsView extends Component {
    state = {
        title: null,
        original_title: null,
        poster_path: null,
        overview: null,
    }

    async componentDidMount() {
        const movieId = Number(this.props.match.params.movieId);
        const {
            title,
            original_title,
            poster_path,
            overview
        } = await moviesApi.fetchMovieById({movieId});
        this.setState({
            title,
            original_title,
            poster_path: `https://image.tmdb.org/t/p/w500/${poster_path}`,
            overview,
        });
    };
    
    handleGoBack = () => {
        const { location, history } = this.props;
        history.push( location?.state?.from || routes.movies );
    }

    render() {
        const { match, location } = this.props;
           
        const {
            title,
            original_title,
            poster_path,
            overview
        } = this.state;
        // console.log(poster_path);
        return (
            <div>
                <button type='button' onClick={this.handleGoBack}>Go back</button>
                <img src={poster_path} alt={title} />
                <h1>{title ? title : original_title}</h1>
                <p>{overview}</p>
                
                <NavLink to={{pathname: `${match.url}/cast`, state: {...location.state}}}>Cast</NavLink>
                <NavLink to={{pathname: `${match.url}/reviews`, state: {...location.state}}}>Reviews</NavLink>
                <Switch>
                    <Route path={`${match.path}/cast`} component={Cast}/>
                    <Route path={`${match.path}/reviews`} component={Reviews}/>
                </Switch>
            </div>
        );
    }
}

export default MoviesDetailsView;