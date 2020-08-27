import React, { Component } from 'react'
import UserModel from '../models/user'

class Login extends Component {
    state = {
        userName: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        UserModel.login(this.state)
        .then(data => {
            console.log(data)
            if (!data.user) {
                // set up alert about invalid 
                return false
            }
            this.props.storeUser(data.user)
            this.props.history.push('/profile')
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userName">Username</label>
                    <input 
                    onChange={this.handleChange}
                    type="text"
                    id="userName"
                    name="userName"
                    value={this.state.userName}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        onChange={this.handleChange}
                        type="password"
                        id="password"
                        name="password"
                        value={this.state.password} />
                </div>
                <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login 