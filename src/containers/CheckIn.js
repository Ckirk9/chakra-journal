import React, { Component } from 'react'
import CheckInQuestions from '../CheckInQuestions'

class CheckIn extends Component {
    state = {
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.history.push({
            pathname: '/results',
            state: this.state
        })
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
                <form 
                className="checkin-form"
                onSubmit={this.handleSubmit}> 
                { CheckInQuestions.map((questionData, idx) => {
                    const {questions, name} = questionData
                    return questions.map((question, index) => {
                    return(                    
                    <div className="question" key={`${ idx}-${index}`}>
                    <p>{ question }</p>
                    <input className="radio" type="radio"
                        name={ `${ name}-${index}` } onChange={this.handleChange} value="yes"/>
                        <label className="radio" htmlFor={ `${ name}-${index}` }>Yes</label>
                    <input className="radio" type="radio"
                        name={ `${ name}-${index}` } onChange={this.handleChange} value="no"/>
                        <label className="radio" htmlFor={ `${ name}-${index}` } >No</label>

                    </div>)

                })
                })}
                <input className="submit-btn" type="submit" value="Submit"/>
                </form>
                
                </div>
        )
    }
}

export default CheckIn