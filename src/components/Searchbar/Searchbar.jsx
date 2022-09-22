import React, { Component } from 'react'

export default class Searchbar extends Component {
    state = {
        input: ''
    }

    handleChange = (e) => {
        const { name, value } = e.currentTarget
        this.setState({ [name]: value })
    };

    handleSubmit = (e) => {
        const { input } = this.state
        e.preventDefault();

        if (input.trim() === '') {
            return alert('AAAA')
        }

        this.props.onSubmit(input)
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <header class="searchbar">
                <form onSubmit={this.handleSubmit}>
                    <button type="submit" class="button">
                        <span class="button-label">Search</span>
                    </button>

                    <input
                        class="input"
                        name='input'
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.input}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        )
    }
}
