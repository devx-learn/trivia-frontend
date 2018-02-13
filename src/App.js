import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
// import SignUp from './components/signUp'
import Chat from './components/chat'
import SignIn from './components/signIn'
import Trivia from './components/trivia'
import './App.css'
import LandingPage from './pages/landing-page'
import GamePage from './pages/game-page'
import SignUp from './pages/sign-up-page'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="header">
                    <div id="landingPage">
                        <Route exact path='/' component={LandingPage} />
                    </div>
                        <Route path='/games' component={GamePage} />
                        <Route path='/sign-up' component={SignUp} />
                </div>
            </Router>
        )
    }
}

export default App;
