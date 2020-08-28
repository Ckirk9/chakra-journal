import React, { Component } from 'react'
import CHAKRAS from '../chakraData'
import ChakraCard from '../components/ChakraCard'

class Results extends Component {

    getChakras() {
        let chakraJSX = []
        let renderedChakraNames = []
        console.log(this.props, this.state)
        const results = this.props.location.state
        //for (const chakra in CHAKRAS ) {
        for (const result in results) {
            const outOfBalance = result.split("-")[0]
            if (results[result] === "no" && !renderedChakraNames.includes(outOfBalance)) {
                chakraJSX.push(<ChakraCard key={result} { ...CHAKRAS[outOfBalance]} />)
                renderedChakraNames.push(outOfBalance)
            }
        }
        return chakraJSX
    }

    render () {
        return (
            <div>
                { this.getChakras()}
            </div>
        )
    }
}


export default Results