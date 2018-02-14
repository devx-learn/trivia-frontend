import React, { Component } from 'react';
import {
  Col,
  ControlLabel,
  FormGroup,
  FormControl,
  Button,
  Row,
  HelpBlock,
  Alert
} from 'react-bootstrap';

class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                email: '',
                encryptedPassword: '',
                authToken: '',
                authTokenExpiration: '',
                salt: ''
            }
        }
    }

    handleChange(event){
        const formState = Object.assign({}, this.state.form)
        formState[event.target.name] = event.target.value
        this.setState({form: formState})
    }

    handleSubmit(){
        this.props.onSubmit(this.state.form)
        console.log(this.state.form)
    }

    errorsFor(attribute){
        var errorString = ""
        if(this.props.errors){
            const errors = this.props.errors.filter(error => error.param === attribute )
            if(errors){
                errorString = errors.map(error => error.msg ).join(", ")
            }
        }
        return errorString === "" ? null : errorString
    }

    render(){
        return (
            <form id="signUpForm">
                <Row>
                    <Col xs={6}>
                        {this.props.errors &&
                            <Alert bsStyle="danger">
                                Please check the form and try again.
                            </Alert>
                        }
                    </Col>
                </Row>

            <div class='forms'>
                 <Row>
                   <Col xs={6}>
                   <FormGroup
                     id="firstName-form-group"
                     validationState={this.errorsFor('firstName') && 'error'}>
                     <ControlLabel id="firstName">First Name</ControlLabel>
                     <FormControl
                       type="text"
                       name="firstName"
                       value={this.state.form.firstName}
                       onChange={this.handleChange.bind(this)}
                     />
                    {this.errorsFor('firstName') &&
                        <HelpBlock id="firstName-help-block">{this.errorsFor('firstName')}</HelpBlock>
                    }
                   </FormGroup>
                   </Col>
                 </Row>

                 <Row>
                   <Col xs={6}>
                    <FormGroup
                        id="lastName-form-group"
                        validationState={this.errorsFor('lastName') && 'error'}>
                       <ControlLabel id="lastName">Last Name</ControlLabel>
                       <FormControl
                       type="text"
                       name="lastName"
                       onChange={this.handleChange.bind(this)}
                       value={this.state.form.lastName}
                       />
                       {this.errorsFor('lastName') &&
                       <HelpBlock id="lastName-help-block">{this.errorsFor('lastName')}</HelpBlock>
                   }
                     </FormGroup>
                   </Col>
                 </Row>

                 <Row>
                   <Col xs={6}>
                     <FormGroup
                        id="email-form-group"
                        validationState={this.errorsFor('email') && 'error'}>
                       <ControlLabel id="email">Email</ControlLabel>
                       <FormControl
                       type="text"
                       name="email"
                       onChange={this.handleChange.bind(this)}
                       value={this.state.form.email}
                       />
                       {this.errorsFor('email') &&
                       <HelpBlock id="email-help-block">{this.errorsFor('email')}</HelpBlock>
                        }
                     </FormGroup>
                   </Col>
                 </Row>

                 <Row>
                   <Col xs={6}>
                     <FormGroup
                        id="encryptedPassword-form-group"
                        validationState={this.errorsFor('encryptedPassword') && 'error'}>
                       <ControlLabel id="encryptedPassword">Password</ControlLabel>
                       <FormControl
                       type="password"
                       name="encryptedPassword"
                       onChange={this.handleChange.bind(this)}
                       value={this.state.form.encryptedPassword}
                       />
                       {this.errorsFor('encryptedPassword') &&
                       <HelpBlock id="encryptedPassword-help-block">{this.errorsFor('encryptedPassword')}</HelpBlock>
                        }
                     </FormGroup>
                   </Col>
                 </Row>

                </div>

                 <Row>
                   <Col xs={6}>
                     <Button
                         id="submit"
                         onClick={this.handleSubmit.bind(this)}
                     >Create a Trivia Account!</Button>
                   </Col>
                 </Row>

               </form>
        );
    }
}

export default SignUp
