import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
    Button,
    Col,
    ControlLabel,
    FormGroup,
    FormControl,
    Row,
} from 'react-bootstrap'

const API = "http://localhost:3000"

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {
                username: '',
                password: ''
            },
        }
    }


    handleNewPerson(params) {
        fetch(`${API}/sign-up`, {
                body: JSON.stringify(params),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST"
        })
        .then((rawResponse) => { return rawResponse.json() })
        .then((parsedResponse) => {
            if(parsedResponse.errors) {
                this.setState({errors: parsedResponse.errors})
            } else {
                const persons = this.state.persons || []

                persons.push(parsedResponse.person)

                this.setState({
                    persons: persons,
                    errors: null,
                    newPersonsSuccess: true
                })
            }
        })
    }

    handleChange(field, e) {
        const { value } = e.target
        const { form } = this.state

        form[field] = value

        this.setState({
            form: form
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        console.log("caught submit")
        this.props.onSubmit(this.state.form)
    }

    render() {
        const { username, password } = this.state.form

        return (
            <form>
                <Row>
                    <Col xs={6}>
                        <FormGroup>
                            <ControlLabel id="username"> Username </ControlLabel>
                            <FormControl
                                type="text"
                                name="username"
                                value={username}
                                onChange={this.handleChange.bind(this, 'username')}
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6}>
                        <FormGroup>
                            <ControlLabel id="password"> Password </ControlLabel>
                            <FormControl
                                type="password"
                                name="password"
                                value={password}
                                onChange={this.handleChange.bind(this, 'password')}
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6}>
                        <Button
                            id="submit"
                            onClick={this.handleSubmit.bind(this)}
                        >
                            Create a Trivia Account!
                        </Button>
                    </Col>
                </Row>
            </form>
        )
    }
}

export default SignUp
