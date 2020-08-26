import React, { Component } from 'react'
//import ChakraModel from '../models/chakra'
import EntryModel from '../models/entry'
import { Link } from 'react-router-dom'
//import ChakraCard from '../components/ChakraCard'

class Profile extends Component {
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
        return(
            <ul>
                <li><Link to={'/entries'}>My Entries</Link></li>
                <li><Link to={'/entries/new'}>New Entry</Link></li>
                <li><Link to={'/entries'}>My Entries</Link></li>
            </ul>
        )
    }
}

export default Profile