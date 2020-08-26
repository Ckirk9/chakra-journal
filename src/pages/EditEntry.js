import React, { Component } from 'react'
import EntryModel from '../models/entry'

class EditEntry extends Component { 
    state = {
        entry: {},
        currentEntry: this.props.match.params.id
    }

    handleSubmit = (event) => {
        event.preventDefault()
        EntryModel.update(this.state)
        .then(data => {
            this.props.history.push('/entries')
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
                <h2>Edit Entry</h2>
                <form onSubmit={this.handleSubmit}>
                <div className="entry-form">
                    <label htmlFor="date">Entry Date</label>
                    <input 
                    type="date"
                    name="entryDate"
                    onChange={this.handleChange}
                    value={this.state.entry.entryDate} />
                </div>
                <div className="entry-form">
                    <textarea 
                    name="body" 
                    placeholder="Begin typing entry here..."
                    onChange={this.handleChange}
                    value={this.state.entry.body} >
                    </textarea>
                    <input type="submit" value="Save!"/>
                </div>
                </form>
            </div>
        )
    }
}



export default EditEntry