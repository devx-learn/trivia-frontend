import React, { Component } from 'react'
import { BrowserRouter as Router,  Route } from 'react-router-dom'
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
