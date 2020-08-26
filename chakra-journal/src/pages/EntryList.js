import React, { Component } from 'react'
import EntryModel from '../models/entry'

import { Link } from 'react-router-dom'

class EntryList extends Component {
    state = {
        entries: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        console.log(this.props);
        EntryModel.all(localStorage.getItem('uid')).then(data => {
            console.log(data)
            this.setState({ entries: data.entries })
        })
    }

    render() {
        let entries = this.state.entries ? this.state.entries.map((entry, index) => {
            return (
                <Link to={`/entries/${entry._id}`} key={index}>
                    <h5>{ entry.entryDate }</h5>
                </Link>
            )
        }) : 'No entries'
        
    return (
        <div>
            <h1>Your Previous Entries</h1>
            { entries }
        </div>
    )
    }
}

export default EntryList