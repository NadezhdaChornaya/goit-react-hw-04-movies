import React, { Component } from 'react'

export default class SearchForm extends Component {
    state = {
        searchQuery: '',
    }

    handleChange = (e) => {
        this.setState({ searchQuery: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.searchQuery);
        this.setState({ searchQuery: '', })
    }

    render() {
        const { searchQuery } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={searchQuery} onChange={this.handleChange}></input>
                <button type="submit">Search</button>
            </form>
        )
    }
}

