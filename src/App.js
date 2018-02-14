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

  newUserSubmit(){}

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


  handleNewUser(params){
    fetch(`${this.state.apiUrl}/user`,
        {
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST"
        }
    )
    .then((rawResponse)=>{
        return rawResponse.json()
    })
    .then((parsedResponse) =>{
        if(parsedResponse.errors){
            this.setState({errors: parsedResponse.errors})
        }else{
            const user = Object.assign([], this.state.user)
            user.push(parsedResponse.user)
            this.setState({
                user: user,
                errors: null,
                newUserSuccess: true
        })
       }
    })
  }


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
