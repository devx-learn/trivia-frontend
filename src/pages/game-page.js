import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import SignUp from "../components/signUp";
import Chat from "../components/chat";
import SignIn from "../components/signIn";
import Trivia from "../components/trivia";
import "../App.css";
import sample from "../sample";

class TriviaQuestions extends Component {
  constructor(props) {
    super(props);

    this.state = {
        rawData: sample,
        currentQuestionIndex: 0
    };
  }

  /*
* Shuffles array in place.
* @param {Array} a items An array containing the items.
*/
    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
    }

  componentWillMount() {
    this.QuizVariables()
    this.apiNormalization()
  }

  // TODO: This is not supplying the random number of the range and gives undefined

  /*random int between min and max for chosen number to insert into fetch*/
    randomInt(min,max){
        return
        var min,max;
           Math.floor((Math.random() * max) + min);
    }

    QuizVariables(){

          var categoryRandom = this.randomInt(9,32)
          var difficultyRandom = this.randomInt(1,3)

          // console.log("This is the random number " + " " + categoryRandom);
      this.getQuiz(10,categoryRandom,difficultyRandom,"multiple")
    }

  /* Call to API hosted site*/
    getQuiz(amount, category, difficulty, type) {
        return
        var dynamicURL = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`

console.log(dynamicURL)
debugger
        fetch(dynamicURL)
        .then(response => response.json())
        .then(resp => {
            console.log(resp);
            this.setState({
                data: resp,
                rawData: resp
            });
        })
            .catch(error => console.error('Server Error'))
        }

    apiNormalization(){

    let questionData = this.state.rawData.results;
    let newQuestions = [];
    let questions = [];

    questionData.forEach(result => {
      newQuestions.push({
        category: result.category,
        type: result.type,
        difficulty: result.difficulty,
        question: result.question,
        correct_answer: result.correct_answer,
        incorrect_answers: result.incorrect_answers
      });
    });
    this.shuffle(newQuestions)
    this.setState({ questions: newQuestions });
    }


  answerClick(answer){
    let correctAnswer = this.state.questions[this.state.currentQuestionIndex].correct_answer;
    if(correctAnswer === answer){
      alert("you're right")
    } else {
      alert("you're wrong, the correct answer is " + correctAnswer)
    }
    let nextQuestionIndex = this.state.currentQuestionIndex+1
    this.setState({currentQuestionIndex: nextQuestionIndex})
  }

  render() {
    let currentQuestion = this.state.questions[this.state.currentQuestionIndex];
    let answers = [];
    answers.push(currentQuestion.correct_answer);
    answers = answers.concat(currentQuestion.incorrect_answers);
    this.shuffle(answers);

    return (
      <div>
        <Jumbotron>
          <h1>Welcome to Trivia!</h1>
          <p className="question">{currentQuestion.question}</p>
          <Button bsStyle="primary" onClick={this.answerClick.bind(this, answers[0])}>{answers[0]}</Button>
          <Button bsStyle="primary" onClick={this.answerClick.bind(this, answers[1])}>{answers[1]}</Button>
          <Button bsStyle="primary" onClick={this.answerClick.bind(this, answers[2])}>{answers[2]}</Button>
          <Button bsStyle="primary" onClick={this.answerClick.bind(this, answers[3])}>{answers[3]}</Button>
        </Jumbotron>
        <Chat username='test user'/>
        {false && this.state.questions.map(question => {
            return (
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
                  <br />
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default TriviaQuestions;
