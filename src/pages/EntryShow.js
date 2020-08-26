import React, { Component } from 'react'
import EntryModel from '../models/entry'
import EntryCard from '../components/EntryCard'

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

    render() {
        return (
            <div>
            <div>
                < EntryCard entry={this.state.entry} />
            </div>
            </div>
        )
    }
}

export default EntryShow