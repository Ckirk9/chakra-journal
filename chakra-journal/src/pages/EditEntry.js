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
            
        })
    }
}



export default EditEntry