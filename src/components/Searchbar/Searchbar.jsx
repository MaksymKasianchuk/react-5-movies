import React, { Component } from 'react';
import styles from './Searchbar.module.scss';

class Searchbar extends Component {

    state = { query: '' };

    handleChange = e => {
        this.setState({ query: e.currentTarget.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    };

    render(){
        return (
            <div className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
                    <input
                        className={styles.SearchForm_input} 
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.query}
                        onChange={this.handleChange}
                    />
                    <button type="submit" className={styles.SearchForm_button} >
                        <span>Search</span>
                    </button>
                </form>
            </div>
        );
    }
};

export default Searchbar;