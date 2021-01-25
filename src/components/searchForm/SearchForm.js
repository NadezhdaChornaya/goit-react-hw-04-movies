import React, { Component } from 'react'
import { Form } from './styledSearchForm';

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
            <Form onSubmit={this.handleSubmit}>
                <input className="formInput" type="text" value={searchQuery} onChange={this.handleChange} placeholder="Enter your movie here"></input>
                <button className="formButton" type="submit">Search</button>
            </Form>
        )
    }
}

