import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import * as firebase from 'firebase';
import ButtonAppBar from './Header3'

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
            Fatigue:"",
            MuscleAche: "",
            Positive: "",
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
    UpdateFatigue = (event) => {
      event.preventDefault()
        this.setState({
            Fatigue: event.currentTarget.value
        });
        console.log(event.currentTarget.value);
    }
    UpdateMuscleAche = (event) => {
      event.preventDefault()
        this.setState({
            MuscleAche: event.currentTarget.value
        });
        console.log(event.currentTarget.value);
    }
    UpdatePositive = (event) => {
      event.preventDefault()
        this.setState({
            Positive: event.currentTarget.value
        });
        console.log(event.currentTarget.value);
    }
    SubmitCovidAnswers =() =>{

      var docInfo ={
        Coughing: this.state.Coughing,
        Breathing: this.state.Breathing,
        Fever: this.state.Fever,
        Smell_Taste: this.state.Smell_Taste,
        SoreThroat: this.state.SoreThroat,
        Vomiting: this.state.Vomiting,
        Fatigue: this.state.Fatigue,
        MuscleAche: this.state.MuscleAche,
        Positive: this.state.Positive
      };
      var userId = firebase.auth().currentUser.uid;
    
    var newPostKey = firebase.database().ref().child('questionAns').push().key;
    var updates = {};
    updates['/data/' + newPostKey] = docInfo;
    updates['/users/' + userId + '/' + newPostKey] = docInfo;
    firebase.database().ref().update(updates);

    }
    
    render(){
        return(
            <div>  
              <ButtonAppBar/>
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
                   Severe Fatigue:
                  </Typography>
                  <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "Yes"
                      onClick =  {this.UpdateFatigue.bind("Yes")}>
                        Yes</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "No"
                      onClick = {this.UpdateFatigue.bind("No")}>
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
                      onClick =  {this.UpdateMuscleAche.bind("Yes")}>
                        Yes</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "No"
                      onClick = {this.UpdateMuscleAche.bind("No")}>
                        No</Button>
                   </ButtonGroup>
                   <Typography variant="h5" style={{textAlign:"center", margin:"auto"}}>
                    Have you tested Covid-19 Positive in the last 90 days?:
                  </Typography>
                  <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "Yes"
                      onClick = {this.UpdatePositive.bind("Yes")}>
                        Yes</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "No"
                      onClick = {this.UpdatePositive.bind("No")}>
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