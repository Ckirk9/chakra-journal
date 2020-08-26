import React, { Component } from 'react'
import EntryModel from '../models/entry'

class EditEntry extends Component { 
    state = {
        entry: {},
        currentEntry: this.props.match.params.id
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        EntryModel.show(this.state.currentEntry).then(data => {
            this.setState({ entry: data.entry })
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        EntryModel.edit(this.state)
        .then(data => {
            this.props.history.push('/entries')
        })
    }

    handleChange = (event) => {
        if (event.target.type !== "text") {
            this.setState({ completed: !this.state.completed})
        }

        this.setState({
            entry: {
                ...this.state.entry,
                [event.target.name]: event.target.value
            }
        })
    }

    formatDate = (rawDate) => {
        console.log(rawDate)
        if (rawDate) {
            rawDate = new Date(rawDate)
            const year = rawDate.getFullYear()
            const month = rawDate.getMonth() + 1
            let monthString = month.toString()
            if (month < 10) {
                monthString = '0' + month.toString()
            }
            const day = rawDate.getDate() + 1
            let dayString = day.toString()
            if (day < 10) {
                dayString = '0' + day.toString()
            }
            return `${year}-${monthString}-${dayString}`
        } else {
            return rawDate
        }
    }
    
    render() {
        console.log(this.state.entry)
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
                    value={this.formatDate(this.state.entry.entryDate)} />
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