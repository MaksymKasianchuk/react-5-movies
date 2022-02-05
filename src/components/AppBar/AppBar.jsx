import React from 'react';
import Navigation from '../Navigation';
import styles from './AppBar.module.scss';

const AppBar = props => {
    return (
        <header className={styles.Header}>
            <Navigation />
        </header>
    );
};
export default AppBar;