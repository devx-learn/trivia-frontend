import React, { Component } from 'react';

import {
  Button,
  Col,
  ControlLabel,
  FormGroup,
  FormControl,
  Row
} from 'react-bootstrap'

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                username: '',
                password: ''
            }
        }
    }
    handleChange(e){
        const formState = Object.assign({}, this.state.form)
        formState[e.target.name] = e.target.value
        this.setState({form: formState})
  }

  render() {
    return (

      <form>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="username">Username</ControlLabel>
              <FormControl
                type="text"
                name="username"
                value={this.state.form.username}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="password">Password</ControlLabel>
              <FormControl
                type="password"
                name="password"
                value={this.state.form.password}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <Button id="submit">Log into your Trivia Account!</Button>
          </Col>
        </Row>

      </form>

    )
  }
}

export default SignIn
