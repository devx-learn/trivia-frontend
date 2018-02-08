import React, { Component } from 'react';
import SignUp from '../components/signUp';
import Chat from '../components/chat';
import SignIn from '../components/signIn';
import Trivia from '../components/trivia';
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
                <div className="signup">
                    <h3> Sign-Up </h3>
                    <SignUp />
                </div>
            </div>
        </div>

    );
  }
}

export default LandingPageView;