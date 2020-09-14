/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();*/
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement= document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let normalquestionList,currentQuestionIndex

startButton.addEventListener('click', () => {startGame()})
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame(){
console.log('Started')
startButton.classList.add('hide')
normalquestionList = questions.sort()
currentQuestionIndex=0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion(){
 
showQuestion(normalquestionList[currentQuestionIndex])
}

function showQuestion(question){
  questionElement.innertext = question.question;
  question.answers.forEach(answer => {
    if(answer.correct){
      yes_score++
      startButton.dataset.correct=answer.correct
    } else{no_score++}
    button.addEventListener('click',selectAnswer)
    answerButtonsElement.appendChild(button)
  });
}

function selectAnswer(e){
const selectedButton = e.target;
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
  setStatusClass(button,button.dataset.correct)
})
nextButton.classList.remove('hide')
}

function setStatusClass(element, correct){
  clearStatusClass(element)
  if(correct){
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')

}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const questions =[
  {
    question:'Fever of 100F, or feeling hot with chills:',
    answers:[{text:'Yes', correct: true}, {text:'No', correct:false} ]
  },
  {
    question:'Coughing unrelated to chronic condition:',
    answers:[{text:'Yes', correct: true}, {text:'No', correct:false} ]
  },
  {
    question:"Difficulty breahting:",
    answers:[{text:'Yes', correct: true}, {text:'No', correct:false} ]
  },
  {
    question:"Sore Throat:",
    answers:[{text:'Yes', correct: true}, {text:'No', correct:false} ]
  },
  {
    question:"New loss of smell and/or taste:",
    answers:[{text:'Yes', correct: true}, {text:'No', correct:false} ]
  },
  {
    question:"Vomiting:",
    answers:[{text:'Yes', correct: true}, {text:'No', correct:false} ]
  },
  {
    question:"Severe fatigue:",
    answers:[{text:'Yes', correct: true}, {text:'No', correct:false} ]
  },
  {
    question:"Severe muscle aches:",
    answers:[{text:'Yes', correct: true}, {text:'No', correct:false} ]
  },
  {
    question:"Have you tested Covid-19 positive in the last 90 days?:",
    answers:[{text:'Yes', correct: true}, {text:'No', correct:false} ]
  }
]
var yes_score=0, no_score=0;

/*for(var i=0; i< questions.length; i++) {
  var response = prompt(questions[i].prompt);
  if(response == questions[i].answer){
    yes_score++;
  } else {no_score++;}
}*/

if(yes_score <= 3){
  alert("You need to take a Covid test.");
}
