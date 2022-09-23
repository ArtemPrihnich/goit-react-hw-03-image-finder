import React, { Component } from 'react'
import '../../styles.css'

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
            <header className="Searchbar">
                <form className='SeacrhForm' onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
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
