import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

import Chat from './components/chat'
import SignIn from './components/signIn'
import Trivia from './components/trivia'
import LandingPage from './pages/landing-page'
import GamePage from './pages/game-page'
import SignUpPage from './pages/sign-up-page'

import './App.css'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="header">
                    <Route exact path='/' component={LandingPage} />
                    <Route path='/games' component={GamePage} />
                    <Route path='/sign-up' render={(props) => {
                        return <SignUpPage onSubmit={handleSubmit} />
                    }} />
                </div>
            </Router>
        )
    }
}

export default App;

function handleSubmit(form) {
    console.log("this is inside the function passed as a prop");
    console.log(form);

    // fetch
}

function getQuiz(amount, category, difficulty, type) {
    return fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`)
}
