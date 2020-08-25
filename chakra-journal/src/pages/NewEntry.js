import React, { Component } from 'react'
import EntryModel from '../models/entry'

class NewEntry extends Component {
    state = {
        entryDate: '',
        //preferences: '',
        assessmentResults: '',
        body: '',
    }

    handleSubmit = (event) => {
        event.preventDefault()
        EntryModel.create(this.state)
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
                <h2>New Entry</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="entry-form">
                        <label htmlFor="date">Entry Date</label>
                        <input 
                        type="date"
                        name="entry-date"
                        onChange={this.handleChange}
                        value={this.state.entryDate} />
                    </div>
                    <div className="entry-form">
                        <label htmlFor="">Entry Date</label>
                        <input 
                        type="date"
                        name="entry-date"
                        onChange={this.handleChange}
                        value={this.state.entryDate} />
                    </div>
                </form>
            </div>
        )
    }
}

export default NewEntry