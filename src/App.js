import React, { Component } from 'react';
import SignUp from './components/signUp';
import Chat from './components/chat';
import SignIn from './components/signIn';
import Trivia from './components/trivia';
import './App.css';
import LandingPage from './views/landing-page'
import GamePage from './views/game-page'

class App extends Component {
  render() {
    return (
        <div className="header">
            <LandingPage />
        </div>

    );
  }
}

export default App;
