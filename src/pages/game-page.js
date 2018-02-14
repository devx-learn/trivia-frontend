import React, { Component } from "react"
import { Button } from "react-bootstrap"
import "../App.css"
import sample from "../sample"

const categoryImages = {
  "Animals": "./images/Animals.jpg",
  "General Knowledge" : "./images/general-knowledge.jpg",
  "Entertainment: Books" : "./images/books.jpg",
  "Entertainment: Film": "./images/Entertainment-film.jpg",
  "Entertainment: Music" : "./images/music.jpg",
  "Entertainment: Television" : "./images/entertainment-television.jpg",
  "Entertainment: Video Games" : "./images/entertainment-video-games.jpg",
  "Entertainment: Board Games" : "./images/entertainment-board-games.jpg",
  "Science & Nature" : "./images/science-nature.jpg",
  "Science: Computers" : "./images/science-computers.jpg",
  "Science: Mathematics" : "./images/science-math.jpg",
  "Mythology" : "./images/mythology.jpg",
  "Sports" : "./images/sports.jpg",
  "Geography" : "./images/geography.png",
  "History" : "./images/history.jpg",
  "Politics" : "./images/politics.jpg",
  "Art" : "./images/art.jpg",
  "Celebrities" : "./images/background.jpg",
  "Vehicles" : "./images/cars.jpg",
  "Entertainment: Comics" : "./images/comic-book.jpg",
  "Science: Gadgets" : "./images/Gadgets.jpg",
  "Entertainment: Japanese Anime & Manga" : "./images/Japanese-Anime.png",
  "Entertainment: Cartoon & Animations" : "./images/animation.jpg",
  "Entertainment: Musicals & Theatres" : "./images/animation.jpg"
}

class TriviaQuestions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rawData: sample,
      currentQuestionIndex: 0,
      score: 0,
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
    let { currentQuestionIndex, score } = this.state
    let correctAnswer = this.currentQuestion().correct_answer

    correctAnswer === answer ? score++ : score--

    // if(correctAnswer === answer) {
    //   alert("you're right")
    //   score++
    // } else {
    //   alert("you're wrong, the correct answer is " + correctAnswer)
    // }

    this.setState({
      currentQuestionIndex: currentQuestionIndex + 1,
      score: score,
    })
  }

  render() {
    let currentQuestion = this.currentQuestion()
    let categoryImage = categoryImages[currentQuestion.category]
    let answers = [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers]

    this.shuffle(answers)

    const { score } = this.state

    return (
      <div>
          <img id="background" src={categoryImage} alt="category"/>
          <h1>Welcome to Trivia!</h1>
          <h3 className="score">Score: {score}</h3>
          <p className="category">{currentQuestion.category}</p>
          <p className="question">{decodeEntities(currentQuestion.question)}</p>
          <h2></h2>
          {answers.map((a) => {
            return <Button key={a} bsStyle="primary" onClick={this.answerClick.bind(this, a)}>{decodeEntities(a)}</Button>
          })}
      </div>
    )
  }
}

export default TriviaQuestions


function decodeEntities(encodedString) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = encodedString;
    return textArea.value;
}
