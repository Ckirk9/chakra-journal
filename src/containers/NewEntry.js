import React, { Component } from 'react'
import EntryModel from '../models/entry'

class NewEntry extends Component {
    state = {
        entryDate: '',
        body: '',
        user: localStorage.getItem('uid')
    }

    handleSubmit = (event) => {
        event.preventDefault()
        EntryModel.create(this.state)
        .then(data => {
            this.props.history.push('/profile')
        })
    }

    handleChange = (event) => {
        if (event.target.type !== "text") {
            this.setState({ completed: !this.state.completed})
        }

        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        return(
            <div>
                <h2>New Entry</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="entry-form">
                        <label htmlFor="date">Entry Date</label>
                        <input 
                        type="date"
                        name="entryDate"
                        onChange={this.handleChange}
                        value={this.state.entryDate} />
                    </div>
                    <div className="entry-form">
                       <textarea 
                        name="body" 
                        placeholder="Begin typing entry here..."
                        onChange={this.handleChange}
                        value={this.state.body} >
                        </textarea>
                        <input type="submit" value="Save!"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewEntry