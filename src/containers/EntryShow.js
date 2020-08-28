import React, { Component } from 'react'
import EntryModel from '../models/entry'
import EntryCard from '../components/EntryCard'
import { Link } from 'react-router-dom'

class EntryShow extends Component {
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

    deleteThisEntry = () => {
        EntryModel.destroy(this.state.entry._id).then(data => {
            this.props.history.push('/profile')
        })
    }

    render() {
        return this.state.entry._id ?
            <div>
                <EntryCard entry={this.state.entry} />
                <Link to={`/editEntry/${this.state.entry._id}`}>Edit</Link>
                <div>
                    <span
                    className="remove"
                    onClick={this.deleteThisEntry}>
                        Delete
                    </span>
                </div>
            </div> : 'Loading...'
    }
}

export default EntryShow