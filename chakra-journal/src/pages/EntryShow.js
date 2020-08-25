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
            this.setState({ chakra: data.entry })
        })
    }

    render() {
        return (
            <div>
                < EntryCard {...this.state.chakra }/>
            </div>
        )
    }
}

export default EntryShow