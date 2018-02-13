import React, { Component } from 'react'
import SignUp from '../components/signUp'
import Chat from '../components/chat'
import SignIn from '../components/signIn'
import Trivia from '../components/trivia'
import { Link } from 'react-router-dom'
import '../App.css';

class LandingPageView extends Component {
  render() {
    return (
        <div className="header">
            <div>
                <h1><u> Hello Trivia Team</u></h1>
            </div>
            <div className="container">
                <div className="signin">
                    <h3>Sign-In</h3>
                        <SignIn />
                </div>
            </div>
        </div>

    );
  }
}

export default LandingPageView;
