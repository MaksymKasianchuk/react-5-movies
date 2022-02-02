import React from 'react';
import routes from '../../routes';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.modules.scss';

const Navigation = props => {
    return (
        <nav>
            <NavLink 
                exact
                to={routes.home}
                activeClassName="active"
                className="nav-link"
            >
                Home
            </NavLink>
            <NavLink 
                to={routes.movies}
                activeClassName="active"
                className="nav-link"
            >
                Movies
            </NavLink>
        </nav>
    );
};

export default Navigation;