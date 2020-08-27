import React, { Component } from 'react'
import ChakraCard from '../components/ChakraCard'
import CHAKRAS from '../chakraData'

class ChakraShow extends Component {
    state = {
        chakra: {}, 
        currentChakra: this.props.match.params.name
    }

    componentDidMount() {
        this.setState({
            chakra: CHAKRAS[this.state.currentChakra]
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