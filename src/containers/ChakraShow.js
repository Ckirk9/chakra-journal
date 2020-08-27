import React, { Component } from 'react'
import ChakraModel from '../models/chakra'
import ChakraCard from '../components/ChakraCard'

class ChakraShow extends Component {
    state = {
        chakra: {}, 
        currentChakra: this.props.match.params.id
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        ChakraModel.show(this.state.currentChakra).then(data => {
            this.setState({ chakra: data.chakra })
        })
    }

    render() {
        return (
            <div>
                < ChakraCard {...this.state.chakra }/>
            </div>
        )
    }
}

export default ChakraShow