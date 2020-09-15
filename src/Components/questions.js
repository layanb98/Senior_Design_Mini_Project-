import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import {db_CovidAnswers} from './DatabaseManager'
import * as firebase from 'firebase';
//import * as admin from 'firebase-admin'


const { scryRenderedComponentsWithType } = require("react-dom/test-utils")

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
// const startButton = document.getElementById('start-btn')
// const nextButton = document.getElementById('next-btn')
// const questionContainerElement = document.getElementById('question-container')
// const questionElement= document.getElementById('question')
// const answerButtonsElement = document.getElementById('answer-buttons')

// let normalquestionList,currentQuestionIndex

// startButton.addEventListener('click', () => {startGame()})
// nextButton.addEventListener('click', () => {
//   currentQuestionIndex++
//   setNextQuestion()
// })

// function startGame(){
//   console.log('Started')
//   startButton.classList.add('hide')
//   normalquestionList = questions.sort()
//   currentQuestionIndex=0
//   questionContainerElement.classList.remove('hide')
//   setNextQuestion()
// }

// function setNextQuestion(){
 
// showQuestion(normalquestionList[currentQuestionIndex])
// }

// function showQuestion(question){
//   questionElement.innertext = question.question;
//   question.answers.forEach(answer => {
//     if(answer.correct){
//       yes_score++
//       startButton.dataset.correct=answer.correct
//     } else{no_score++}
//     button.addEventListener('click',selectAnswer)
//     answerButtonsElement.appendChild(button)
//   });
// }

// function selectAnswer(e){
// const selectedButton = e.target;
// const correct = selectedButton.dataset.correct
// setStatusClass(document.body, correct)
// Array.from(answerButtonsElement.children).forEach(button => {
//   setStatusClass(button,button.dataset.correct)
// })
// nextButton.classList.remove('hide')
// }

// function setStatusClass(element, correct){
//   clearStatusClass(element)
//   if(correct){
//     element.classList.add('correct')
//   } else {
//     element.classList.add('wrong')
//   }
// }

// function clearStatusClass(element){
//   element.classList.remove('correct')
//   element.classList.remove('wrong')

// }
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA

// const questions =[
//   {
//     question:'Fever of 100F, or feeling hot with chills:',
//     answers:[{text:'Yes', correct: true}, {text:'No', correct:false} ]
//   },
//   {
//     question:'Coughing unrelated to chronic condition:',
//     answers:[{text:'Yes', correct: true}, {text:'No', correct:false} ]
//   },
//   {
//     question:"Difficulty breahting:",
//     answers:[{text:'Yes', correct: true}, {text:'No', correct:false} ]
//   },
//   {
//     question:"Sore Throat:",
//     answers:[{text:'Yes', correct: true}, {text:'No', correct:false} ]
//   },
//   {
//     question:"New loss of smell and/or taste:",
//     answers:[{text:'Yes', correct: true}, {text:'No', correct:false} ]
//   },
//   {
//     question:"Vomiting:",
//     answers:[{text:'Yes', correct: true}, {text:'No', correct:false} ]
//   },
//   {
//     question:"Severe fatigue:",
//     answers:[{text:'Yes', correct: true}, {text:'No', correct:false} ]
//   },
//   {
//     question:"Severe muscle aches:",
//     answers:[{text:'Yes', correct: true}, {text:'No', correct:false} ]
//   },
//   {
//     question:"Have you tested Covid-19 positive in the last 90 days?:",
//     answers:[{text:'Yes', correct: true}, {text:'No', correct:false} ]
//   }
// ]
// var yes_score=0, no_score=0;

// /*for(var i=0; i< questions.length; i++) {
//   var response = prompt(questions[i].prompt);
//   if(response == questions[i].answer){
//     yes_score++;
//   } else {no_score++;}
// }*/

// if(yes_score <= 3){
//   alert("You need to take a Covid test.");

// }
  class Questions extends Component{
    constructor(props){
        super(props);
        this.state = {
            Fever: "",
            Coughing: "",
            Breathing: "",
            SoreThroat: "",
            Smell_Taste: "",
            Vomiting:"",
            fatigue:"",
            muscleAche: "",
            positive: "",
        }
        this.SubmitCovidAnswers = this.SubmitCovidAnswers.bind(this);
      }

    UpdateFever = (event) => {
      event.preventDefault()
        this.setState({
            Fever: event.currentTarget.value
        });
        console.log(event.currentTarget.value);
    }
    UpdateCoughing = (event) => {
      event.preventDefault()
        this.setState({
            Coughing: event.currentTarget.value
        });
        console.log(event.currentTarget.value);
    }
    UpdateBreathing = (event) => {
      event.preventDefault()
      this.setState({
          Breathing: event.currentTarget.value
      });
      console.log(event.currentTarget.value);
    }
    UpdateSoreThroat = (event) => {
      event.preventDefault()
        this.setState({
            SoreThroat: event.currentTarget.value
        });
        console.log(event.currentTarget.value);
    }
    UpdateSmell_Taste = (event) => {
      event.preventDefault()
        this.setState({
            Smell_Taste: event.currentTarget.value
        });
        console.log(event.currentTarget.value);
    }
    UpdateVomiting = (event) => {
      event.preventDefault()
        this.setState({
            Vomiting: event.currentTarget.value
        });
        console.log(event.currentTarget.value);
    }
    Updatefatigue = (event) => {
      event.preventDefault()
        this.setState({
            fatigue: event.currentTarget.value
        });
        console.log(event.currentTarget.value);
    }
    UpdatemuscleAche = (event) => {
      event.preventDefault()
        this.setState({
            muscleAche: event.currentTarget.value
        });
        console.log(event.currentTarget.value);
    }
    Updatepositive = (event) => {
      event.preventDefault()
        this.setState({
            positive: event.currentTarget.value
        });
        console.log(event.currentTarget.value);
    }
    SubmitCovidAnswers =() =>{
      db_CovidAnswers(this.state.Fever,this.state.Coughing,this.state.Breathing,this.state.SoreThroat,this.state.Smell_Taste,this.state.fatigue,this.state.muscleAche,this.state.positive)
      console.log("calling submit covid answers");
    }
    // SubmitCovidAnswers = () => {
    //   console.log("first Covid app");
    //   //const db = firebase.firestore();
    //   const db = admin.firestore()
    //   console.log("second Covid app");
    //   db.collectionGroup("CovidAnswers").add({
    //         Fever: this.state.Fever,
    //         Coughing: this.state.Coughing,
    //         Breathing: this.state.Breathing,
    //         SoreThroat: this.state.SoreThroat,
    //         Smell_Taste: this.state.Smell_Taste,
    //         Vomiting:this.state.Vomiting,
    //         fatigue:this.state.fatigue,
    //         muscleAche: this.state.muscleAche,
    //         positive: this.state.positive
    //   });  
    //   console.log("after Covid app");
    //   // firebase.auth().onAuthStateChanged(function(user) {
    //   //   if (user) {
    //     // var user = firebase.auth().currentUser;
    //     // console.log(user);
    //     //   // User is signed in.
    //     //   db_CovidAnswers(user, '/s1qdstBkwhzCIcyLiZ0a',this.state.Fever, this.state.Coughing, this.state.Breathing, this.state.SoreThroat, this.state.Smell_Taste, this.state.Vomiting, this.state.fatigue, this.state.muscleAche, this.state.positive) ;
    
    //     //} //else{
    //     //   // No user is signed in.
    //     // }
        
    // }
    
    render(){
        return(
            <div>  
                <Container maxWidth = "sm">
                  <Typography  variant="h5" style={{textAlign:"center", margin:"auto"}}>
                   Fever of 100F, or feeling hot with chills:
                  </Typography>
                  <ButtonGroup disableElevation variant="contained" color="primary" style={{textAlign:"center", margin:"auto"}}>
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "Yes"
                      onClick = {this.UpdateFever.bind("Yes")}>
                        Yes</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "No"
                      onClick =  {this.UpdateFever.bind("No")}>
                        No</Button>
                   </ButtonGroup>
                   <Typography  variant="h5" style={{textAlign:"center", margin:"auto"}}>
                   Coughing unrelated to chronic condition:
                  </Typography>
                  <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "Yes"
                      onClick =  {this.UpdateCoughing.bind("Yes")}>
                        Yes</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "No"
                      onClick = {this.UpdateCoughing.bind("No")}>
                        No</Button>
                   </ButtonGroup>
                   <Typography  variant="h5" style={{textAlign:"center", margin:"auto"}}>
                   Difficulty breahting:
                  </Typography>
                  <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "Yes"
                      onClick =  {this.UpdateBreathing.bind("Yes")}>
                        Yes</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "No"
                      onClick = {this.UpdateBreathing.bind("No")}>
                        No</Button>
                  </ButtonGroup>
                  <Typography  variant="h5" style={{textAlign:"center", margin:"auto"}}>
                  Do you have a Sore Throat:
                  </Typography>
                  <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "Yes"
                      onClick =  {this.UpdateSoreThroat.bind("Yes")}>
                        Yes</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "No"
                      onClick = {this.UpdateSoreThroat.bind("No")}>
                        No</Button>
                   </ButtonGroup>
                   <Typography  variant="h5" style={{textAlign:"center", margin:"auto"}}>
                   New loss of smell and/or taste:
                  </Typography>
                  <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "Yes"
                      onClick =  {this.UpdateSmell_Taste.bind("Yes")}>
                        Yes</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "No"
                      onClick = {this.UpdateSmell_Taste.bind("No")}>
                        No</Button>
                   </ButtonGroup>
                   <Typography  variant="h5" style={{textAlign:"center", margin:"auto"}}>
                   Are you Vomiting:
                  </Typography>
                  <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "Yes"
                      onClick =  {this.UpdateVomiting.bind("No")}>
                        Yes</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "No"
                      onClick = {this.UpdateVomiting.bind("No")}>
                        No</Button>
                   </ButtonGroup>
                   <Typography  variant="h5" style={{textAlign:"center", margin:"auto"}}>
                   Severe fatigue:
                  </Typography>
                  <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "Yes"
                      onClick =  {this.Updatefatigue.bind("Yes")}>
                        Yes</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "No"
                      onClick = {this.Updatefatigue.bind("No")}>
                        No</Button>
                   </ButtonGroup>
                   <Typography  variant="h5" style={{textAlign:"center", margin:"auto"}}>
                   Severe muscle aches:
                  </Typography>
                  <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "Yes"
                      onClick =  {this.UpdatemuscleAche.bind("Yes")}>
                        Yes</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "No"
                      onClick = {this.UpdatemuscleAche.bind("No")}>
                        No</Button>
                   </ButtonGroup>
                   <Typography variant="h5" style={{textAlign:"center", margin:"auto"}}>
                    Have you tested Covid-19 positive in the last 90 days?:
                  </Typography>
                  <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "Yes"
                      onClick = {this.Updatepositive.bind("Yes")}>
                        Yes</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "No"
                      onClick = {this.Updatepositive.bind("No")}>
                        No</Button>
                   </ButtonGroup>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick = {this.SubmitCovidAnswers}
                    // primary = {true}
                    label ="Submit"
                    // className={classes.submit}
                    >Submit Answers
                  </Button>
                      
                </Container>
            </div>

        );
    }
  }
    
  export default Questions;