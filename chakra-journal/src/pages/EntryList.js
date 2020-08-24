import React, { Component } from 'react'
import EntryModel from '..models/entry'

import { Link } from 'react-route-dom'
import EntryCard from '../components/EntryCard'

class EntryList extends Component {
    state = {
        entries: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        EntryModel.all().then(data => {
            this.setState({ entries: data.entries })
        })
    }

    render() {
        let EntryList = this.state.entries.map((game, index) => {
            return (
                <Link to={`/entries/${entry._id}`} key={index}>
                    <EntryCard {...entry} />
                </Link>
            )
        })
        
    return (
        <div>
            <h1>Your Previous Entries</h1>
            { this.state.entries ? EntryList : 'Loading...'}
        </div>
    )
    }
}

export default EntryList