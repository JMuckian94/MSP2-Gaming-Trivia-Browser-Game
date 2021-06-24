// Constants
const question = document.querySelector('#question');
const options = document.querySelector('.option-text');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const playBtnRef = document.querySelector ('#play-btn');
const restartBtnRef = document.querySelector('#restart-btn');

const apiUrl = "https://opentdb.com/api.php?amount=20&category=15";

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = 20;

// Fetches question and answer data from api database
function opentdbData(){
fetch(apiUrl)
.then(res => res.json())
.then(data => extractData(data.results))
.then(results => console.log(results))
}
opentdbData()
function extractData(listOfQuestions){
    return listOfQuestions.map(item => {
        return {
            difficulty: item.difficulty,
            question: item.question,
            correctAnswer : item.correct_answer,
            answers: [...item.incorrect_answers,item.correct_answer]
        }
    });
}
// Used to populate question section of game

function useAPIData(item) {
    $("#question").innerHTML = `question: ${item.results[0].question}`;
  }

// Used to populate answers section of game
function createAnswers(listOfAnswers){
    var answers = [];
    answers.forEach((answer) => {
        const buttonRef = document.createElement('button');
        const buttonDiv = document.querySelector("button");
        button.innerHTML = answers[i];
        button.className = "btn btn-outline-primary btn-lg";
        buttonDiv.appendChild(button);
    });
}

// Start Game Function

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

// Get New Question Function

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > 20) {
        // End of game parameter
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    options.forEach((option) => {
        const number = choice.dataset['number'];
        option.innerText = currentQuestion['option' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

// choices.forEach((choice) => {
//     choice.addEventListener('click' )
// })

const toggleGame = (state) => {
    showGame ? introSectionRef.classList.add('block'): introSectionRef.classList.add('hidden');
}

restartBtnRef.addEventListener('click', toggleGame(false));
playBtnRef.addEventListener('click', toggleGame(true));