import React, { Component } from "react"
import { Jumbotron, Button } from "react-bootstrap"
import SignUp from "../components/signUp"
import Chat from "../components/chat"
import SignIn from "../components/signIn"
import Trivia from "../components/trivia"
import "../App.css"
import sample from "../sample"

const categoryImages = {
  "Animals": "./images/background.jpeg",
  "Sports" : "./images/trooper.png",
}

class TriviaQuestions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rawData: sample,
      currentQuestionIndex: 0,
      category: {
        name: "",
        image: ""
      }
    }
  }

  /**
* Shuffles array in place.
* @param {Array} a items An array containing the items.
*/
    shuffle(a) {
        var j, x, i
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1))
            x = a[i]
            a[i] = a[j]
            a[j] = x
        }
    }

  componentWillMount() {
    let data = this.state.rawData.results

    let questions = data.map((q) => {
      return {
        category: q.category,
        type: q.type,
        difficulty: q.difficulty,
        question: q.question,
        correct_answer: q.correct_answer,
        incorrect_answers: q.incorrect_answers
      }
    })

    this.shuffle(questions)

    this.setState({
      questions: questions
    })
  }

  currentQuestion() {
    const { questions, currentQuestionIndex } = this.state

    return questions[currentQuestionIndex]
  }

  answerClick(answer) {
    const { currentQuestionIndex } = this.state
    let correctAnswer = this.currentQuestion().correct_answer

    if(correctAnswer === answer) {
      alert("you're right")
    } else {
      alert("you're wrong, the correct answer is " + correctAnswer)
    }

    this.setState({
      currentQuestionIndex: currentQuestionIndex + 1
    })
  }

  render() {
    let currentQuestion = this.currentQuestion()
    let categoryImage = categoryImages[currentQuestion.category]
    let answers = [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers]

    this.shuffle(answers)

    return (
      <div>
        <Jumbotron>
          <h1>Welcome to Trivia!</h1>
          <img src={categoryImage} alt="Smiley face" height="42" width="42"/>
          <p className={currentQuestion.category}>{currentQuestion.category}</p>
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
            )
          })}
      </div>
    )
  }
}

export default TriviaQuestions
