import React, { Component } from 'react'
import CheckInQuestions from '../CheckInQuestions'

class CheckIn extends Component {
    state = {
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('this.state', this.state)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
                <div>
                <h3>Check In with yourself</h3>
                <form onSubmit={this.handleSubmit}> 
                { CheckInQuestions.map((questionData, idx) => {
                    const {questions, name} = questionData
                    return questions.map((question, index) => {
                    return(                    
                    <div className="question" key={`${ idx}-${index}`}>
                    <p>{ question }</p>
                    <input type="radio"
                        name={ `${ name}-${index}` } onChange={this.handleChange} value="yes"/>
                        <label htmlFor={ `${ name}-${index}` }>Yes</label>
                    <input type="radio"
                        name={ `${ name}-${index}` } onChange={this.handleChange} value="no"/>
                        <label htmlFor={ `${ name}-${index}` } >No</label>

                    </div>)

                })
                })}
                <input type="submit" value="Submit"/>
                </form>
                
                </div>
        )
    }
}

export default CheckIn