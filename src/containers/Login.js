import React, { Component } from 'react'
import UserModel from '../models/user'
import { Form, Col, Row } from 'react-bootstrap'

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
                <Form onSubmit={this.handleSubmit}>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label 
                    column sm="2">
                    Username
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control                     autoComplete="off"
                    onChange={this.handleChange}
                    type="text"
                    id="userName"
                    name="userName"
                    value={this.state.userName}
                    placeholder="username" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label 
                    column sm="2"
                        id="password">
                    Password
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control 
                    onChange={this.handleChange}
                    name="password"
                        value={this.state.password} type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <button className="submit-btn" type="submit">Login</button>
                </Form>
            </div>
        )
    }
}

export default Login 