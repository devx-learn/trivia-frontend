import React, { Component } from 'react'
import { BrowserRouter as Router,  Route } from 'react-router-dom'
import SignUp from './components/signUp'
import LandingPage from './pages/landing-page'
import GamePage from './pages/game-page'
import './App.css'


class App extends Component {
  constructor(props){
      super(props)
      this.username = "Bob User";
      this.state = {
          user: [],
          newUserSuccess: false,
          errors: null
      }
  }



    handleNewUser = (user) => {
        createNewUser(user)
        .then((res) => {
            console.log(res)

            const { user, errors } = res

            let success = res.errors ? false : true

            this.setState({
                user: user,
                newUserSuccess: success,
                errors: errors
            })
        })
        .catch(e => console.log("error creating user:", e))
    }

    render() {
      const gamePage = (props) => {
        return (
          <GamePage username={this.username} {...props}/> //store input feilds
        );
      }
        return (
            <Router>
                <div className="header">
                    <div id="landingPage">
                        <Route exact path='/' component={LandingPage} />
                    </div>
                        <Route path='/games' component={gamePage} />
                        <Route path='/sign-up' component={SignUp} />
                </div>
            </Router>
        )
    }
}


const API = "http://localhost:3000"

function createNewUser(user) {
    return fetch(`${API}/users`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    })
    .then((raw) => raw.json())
}


export default App;
