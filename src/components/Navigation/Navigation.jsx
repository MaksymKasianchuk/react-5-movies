import React from 'react';
import routes from '../../routes';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = props => {
    return (
        <nav>
            <NavLink 
                exact
                to={routes.home}
                activeClassName={styles.Active}
                className={styles.NavLink}
            >
                Home
            </NavLink>
            <NavLink 
                to={routes.movies}
                activeClassName={styles.Active}
                className={styles.NavLink}
            >
                Movies
            </NavLink>
        </nav>
    );
};

export default Navigation;