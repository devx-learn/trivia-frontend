import React, { Component } from "react";
import {
    Col,
    ControlLabel,
    FormGroup,
    FormControl,
    Button,
    Row,
    HelpBlock,
    Alert
} from "react-bootstrap";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                errors: {},
            }
        };
    }

    handleChange(e) {
        const { form } = this.state

        form[e.target.name] = e.target.value

        console.log(form);

        this.setState({
            form: form
        })
    }

    handleSubmit() {
        const { onSubmit } = this.props
        const { form } = this.state

        console.log("form:", form);

        if(onSubmit) {
            onSubmit(form)
        } else {
            console.log("no onSubmit passed to Signup Component");
        }
    }

    errorsFor(attribute) {
        var errorString = "";
        if (this.props.errors) {
            const errors = this.props.errors.filter(
                error => error.param === attribute
            );
            if (errors) {
                errorString = errors.map(error => error.msg).join(", ");
            }
        }
        return errorString === "" ? null : errorString;
    }

    render(){
        const { firstName, lastName, email, password } = this.state.form

        return (
            <form>
                <Row>
                    <Col xs={6}>
                        {this.props.errors &&
                            <Alert bsStyle="danger">
                                Please check the form and try again.
                            </Alert>
                        }
                    </Col>
                </Row>

            <div className='forms'>
                 <Row>
                   <Col xs={6}>
                   <FormGroup
                     id="firstName-form-group"
                     validationState={this.errorsFor('firstName') && 'error'}>
                     <ControlLabel id="firstName">First Name</ControlLabel>
                     <FormControl
                       type="text"
                       name="firstName"
                       value={firstName}
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
                       value={lastName}
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
                       <ControlLabel id="email">email</ControlLabel>
                       <FormControl
                       type="text"
                       name="email"
                       onChange={this.handleChange.bind(this)}
                       value={email}
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
                        id="password-form-group"
                        validationState={this.errorsFor('password') && 'error'}>
                       <ControlLabel id="password">Password</ControlLabel>
                       <FormControl
                       type="password"
                       name="password"
                       onChange={this.handleChange.bind(this)}
                       value={password}
                       />
                       {this.errorsFor('password') &&
                       <HelpBlock id="password-help-block">{this.errorsFor('password')}</HelpBlock>
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
