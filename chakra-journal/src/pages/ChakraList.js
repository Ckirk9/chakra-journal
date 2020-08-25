import React, { Component } from 'react'
import ChakraModel from '../models/chakra'

import { Link } from 'react-router-dom'
import ChakraCard from '../components/ChakraCard'

class ChakraList extends Component {
    state = {
        chakras: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        ChakraModel.all().then(data => {
            this.setState({ chakras: data.chakras})
        })
    }

    render() {
        let chakraList = this.state.chakras.map((chakra, index) => {
            return (
                <Link to={`/chakras/${ chakra._id}`} key={index}>
                    <ChakraCard {...chakra}/>
                </Link>
            )
        })

        return (
            <div>
                <h1>The 7 Major Chakras</h1>
                { this.state.chakras ? chakraList : 'Loading...' }
            </div>
        )
    }
}

export default ChakraList