import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import SignUp from './components/signUp'
import Chat from './components/chat'
import SignIn from './components/signIn'
import Trivia from './components/trivia'
import './App.css'
import LandingPage from './pages/landing-page'
import GamePage from './pages/game-page'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="header">
                    <Route exact path='/' component={LandingPage} />
                    <Route path='/games' component={GamePage} />
                </div>
            </Router>
        )
    }
}

export default App;
