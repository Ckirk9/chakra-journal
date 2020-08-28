import React, { Component } from 'react'
import UserModel from '../models/user'

class SignUp extends Component {
    state = {
        userName: '',
        password: '',
        password2: '', 
        preferences: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        //confirm created password matches
        if (this.state.password !== this.state.password2) return false
        UserModel.create(this.state)
        .then(data => {
            //console.log(data)
            // clear state in order to clear form fields
            this.setState({
                userName: '',
                password: '',
                password2: '',
               // preferences: ''
            })
            // direct to login
            this.props.history.push('/login')
        })
    }

    render() {
        return (
            <div className="form-group">
                <h3>Sign Up</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="form-group" htmlFor="userName">Username</label>
                        <input className="form-group"
                        onChange={this.handleChange}
                        type="text"
                        id="userName"
                        name="userName"
                        value={this.state.userName}
                        />
                    </div>
                    <div className="form-group">
                    <label className="form-group" htmlFor="password">Password</label>
                    <input className="form-group"
                        onChange={this.handleChange}
                        type="password"
                        id="password"
                        name="password"
                        value={this.state.password} />
                </div>
                <div className="form-group">
                    <label className="form-group" htmlFor="password2">Confirm Password</label>
                    <input className="form-group"
                        onChange={this.handleChange}
                        type="password"
                        id="password2"
                        name="password2"
                        value={this.state.password2} />
                </div>
                {/* <div className="form-group">
                        <label htmlFor="checkbox">Recommendation Preferences</label>
                        <input 
                        onChange={this.handleSubmit}
                        type="checkbox"
                        id="preferences"
                        name="preferences"
                        value={this.state.preferences}
                        />
                    </div> */}
                <button className="btn" type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp