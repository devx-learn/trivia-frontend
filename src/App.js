import React, { Component } from 'react'
import { BrowserRouter as Router,  Route } from 'react-router-dom'
import SignUp from './components/signUp'
import LandingPage from './pages/landing-page'
import GamePage from './pages/game-page'
import './App.css'


class App extends Component {
    constructor(props){
        super(props)

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
                errors: errors,
                newUserSuccess: success,
            })
        })
        .catch(e => console.log("error creating user:", e))
    }

    render() {
        return (
            <Router>
                <div className="header">
                    <div id="landingPage">
                        <Route exact path='/' component={LandingPage} />
                    </div>
                        <Route path='/games' component={GamePage} />
                        <Route path='/signup' render={(props) => {
                            return <SignUp onSubmit={this.handleNewUser} />
                        }} />
                </div>
            </Router>
        )
    }
}

export default App;

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

// newUserSubmit(){}

// componentWillMount(){
//   fetch(`${this.state.apiUrl}/user`)
//   .then((rawResponse) =>{
//       return rawResponse.json()
//   })
//   .then((parsedResponse)=>{
//       this.setState({user: parsedResponse.user})
//       console.log(this.state.user);
//   })
// }
