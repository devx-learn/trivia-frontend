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
            token: "",
            currentQuestionIndex: 0,
            rawData: ""
        };
    }

    /*
* Shuffles array in place.
* @param {Array} a items An array containing the items.
*/

// All solid responses in log
    componentWillMount() {
        this.fetchQuestions();
    }

    async fetchQuestions() {
        let results = await fetchParameters()
        let questions = []

        results.forEach(result => {
            questions.push({
                category: result.category,
                type: result.type,
                difficulty: result.difficulty,
                question: result.question,
                correct_answer: result.correct_answer,
                incorrect_answers: result.incorrect_answers
            })
        })

        shuffle(questions)

        this.setState({
            questions: questions
        })
    }

    answerClick(answer) {
        let correctAnswer = this.state.questions[
            this.state.currentQuestionIndex
        ].correct_answer;
        if (correctAnswer === answer) {
            alert("you're right");
        } else {
            alert("you're wrong, the correct answer is " + correctAnswer);
        }
        let nextQuestionIndex = this.state.currentQuestionIndex + 1;
        this.setState({ currentQuestionIndex: nextQuestionIndex });
    }

    render() {
        const { questions } = this.state

        console.log("questions in render:", questions);

        if (!questions) {
            return <h1>Loading...</h1>;
        }

        let currentQuestion = this.state.questions[
            this.state.currentQuestionIndex
        ]

        let answers = [];
        answers.push(currentQuestion.correct_answer);
        answers = answers.concat(currentQuestion.incorrect_answers);
        shuffle(answers);

        return (
            <div>
                <Jumbotron>
                    <h1>Welcome to Trivia!</h1>
                    <p className="question">{currentQuestion.question}</p>
                    <Button
                        bsStyle="primary"
                        onClick={this.answerClick.bind(this, answers[0])}
                    >
                        {answers[0]}
                    </Button>
                    <Button
                        bsStyle="primary"
                        onClick={this.answerClick.bind(this, answers[1])}
                    >
                        {answers[1]}
                    </Button>
                    <Button
                        bsStyle="primary"
                        onClick={this.answerClick.bind(this, answers[2])}
                    >
                        {answers[2]}
                    </Button>
                    <Button
                        bsStyle="primary"
                        onClick={this.answerClick.bind(this, answers[3])}
                    >
                        {answers[3]}
                    </Button>
                </Jumbotron>
                <Chat username="test user" />
                {false &&
                    this.state.questions.map(question => {
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

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

/************************ FETCH DYNAMIC URL PARAMETERS *****************/

function fetchAmount() {
    return 2
}

function fetchCategory() {
    var category = Math.floor(Math.random() * 32 + 9)

    return category
}


function fetchDifficulty() {
    switch(Math.floor(Math.random() * 3 + 1)) {
        case 1:
            return "easy";
            break;
        case 2:
            return "medium";
            break;
        case 3:
            return "hard";
            break;
        default:
            console.console.log("Error in difficulty switch");
            return "easy"
    }
}

function fetchType() {
    return "multiple"
}

async function fetchToken() {
    return fetch("https://opentdb.com/api_token.php?command=request")
    .then(r => r.json())
    .then(res => {
        console.log(res);
        return res.token
    })
    .catch(err => {
        console.log("err getting token", err)
    })
}

async function fetchQuestions(amount, category, difficulty, type, token) {
    let link = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}&token=${token}`
    console.log(link);

    return fetch(link)
    .then(r => {
        return r.json()
    })
    .then((res) => {
        console.log(res);
         return res.results
    })
    .catch(error => console.error("Error Fetching Questions:", error));
}

async function fetchParameters() {
    let amount = fetchAmount()
    let category = fetchCategory()
    let difficulty = fetchDifficulty()
    let type = fetchType()
    let token = await fetchToken()

    console.log(token);

    let questions = await fetchQuestions(amount, category, difficulty, type, token)

    console.log("questions:", questions);

     return questions
}
