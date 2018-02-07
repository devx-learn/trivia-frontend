import React, { Component } from 'react';
import SignUp from './components/signUp';
import Chat from './components/chat';
import SignIn from './components/signIn';
import Trivia from './components/trivia';
import './App.css';
import sample from './sample'

class App extends Component {
    constructor(props){
        super(props)
            this.state = {
                rawData: sample
            }
        }
        componentWillMount(){
            let questionData = this.state.rawData.results
            let newQuestions = []

            questionData.forEach((result)=> {
                    newQuestions.push({
                        category: result.category,
                        type: result.type,
                        difficulty: result.difficulty,
                        question: result.question,
                        correct_answer:result.correct_answer,
                        incorrect_answers: result.incorrect_answers
                    })

            })
            this.setState({questions: newQuestions})
        }


  render() {
    return (
            <div>
                {this.state.questions.map((question)=>{
                    return(

                <div>
                    <div>
                        <p>
                        CATEGORY : &emsp;
                        {question.category}
                        </p>

                        <p>
                        DIFFICULTY LEVEL : &emsp;
                        {question.difficulty}
                        </p>

                        <p>
                        QUESTION : &emsp;
                        {question.question}
                        </p>

                        <p>
                        CORRECT ANSWER : &emsp;
                        {question.correct_answer}
                        </p>

                        <p>
                        INCORRECT ANSWERS : &emsp;
                        {question.incorrect_answers}
                        </p>
                        <br/>
                    </div>
                </div>
            )})}
            </div>
    )}

}

export default App;
