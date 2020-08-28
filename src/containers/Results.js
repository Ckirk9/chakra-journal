import React, { Component } from 'react'
import CHAKRAS from '../chakraData'
import ChakraCard from '../components/ChakraCard'
import { Accordion, Card, Button } from 'react-bootstrap'

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
                const billow = <Card key={outOfBalance}>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={outOfBalance}>
                        {outOfBalance.toUpperCase()}
                    </Accordion.Toggle>
                </Card.Header>
                    <Accordion.Collapse eventKey={outOfBalance}>
                        <Card.Body>
                            <ChakraCard { ...CHAKRAS[outOfBalance]} />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                chakraJSX.push(billow)
                renderedChakraNames.push(outOfBalance)
            }
        }
        return chakraJSX
    }

    render () {
        return (
            <div>
                <Accordion>
                    { this.getChakras()}
                </Accordion>
            </div>
        )
    }
}


export default Results