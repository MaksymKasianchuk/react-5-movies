import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import routes from '../routes';
import moviesApi from '../services/movies-api'; 
import placeholder from '../img/404.webp';

import Reviews from '../components/Reviews';
import Cast from '../components/Cast';
import MoviesDetails from '../components/MoviesDetails';

class MoviesDetailsView extends Component {
    state = {
        title: null,
        original_title: null,
        poster_path: null,
        overview: null,
        release_date: null,
        vote_average: null,
    }

    async componentDidMount() {
        const movieId = Number(this.props.match.params.movieId);
        const {
            title,
            original_title,
            poster_path,
            overview,
            release_date,
            vote_average
        } = await moviesApi.fetchMovieById({movieId});
        const poster = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : placeholder;
        this.setState({
            title,
            original_title,
            poster_path: poster,
            overview,
            release_date,
            vote_average
        });
    };
    
    handleGoBack = () => {
        const { location, history } = this.props;
        history.push( location?.state?.from || routes.movies );
    }

    render() {
        const { match, location } = this.props;
        
        return (
            <div className="MoviesDetailsView">
                <MoviesDetails {...this.state} handleGoBack={this.handleGoBack}/>
                <NavLink 
                    to={{
                        pathname: `${match.url}/cast`, 
                        state: {...location.state}
                    }}
                    activeClassName="Active"
                    className="NavLink"
                >
                    Cast
                </NavLink>
                <NavLink 
                    to={{
                        pathname: `${match.url}/reviews`, 
                        state: {...location.state}
                    }}
                    activeClassName="Active"
                    className="NavLink"
                >
                    Reviews
                </NavLink>

                <Switch>
                    <Route path={`${match.path}/cast`} component={Cast}/>
                    <Route path={`${match.path}/reviews`} component={Reviews}/>
                </Switch>
            </div>
        );
    }
}

export default MoviesDetailsView;