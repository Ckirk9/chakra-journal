import React, { Component } from 'react'
//import ChakraModel from '../models/chakra'
import EntryModel from '../models/entry'
import { Link } from 'react-router-dom'
import EntryList from '../components/EntryList'
//import ChakraCard from '../components/ChakraCard'

class Profile extends Component {
    state = {
        entries: [],
        user: localStorage.getItem('uid'),
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        EntryModel.all(localStorage.getItem('uid')).then(data => {
            this.setState({ entries: data.entries })
        })
    }

    render() {
        return(
            <div className="profile">
                <h3>Welcome { this.state.user }</h3>
                
                <ul>
                    <li><Link to={'/entries/new'}>New Entry</Link></li>
                    <li><Link to={'/checkIn'}>Check In</Link></li>
                </ul>
                <div>
                    <EntryList entries={ this.state.entries }/>
                </div>
            </div>
                
        )
    }
}

export default Profile