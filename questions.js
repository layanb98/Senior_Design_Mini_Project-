import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { Container, recomposeColor } from '@material-ui/core';
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
            color:"primary",
        }
        
        this.SubmitCovidAnswers = this.SubmitCovidAnswers.bind(this);
      }

    UpdateFever = (event) => {
      event.preventDefault()
        this.setState({
            Fever: event.currentTarget.value,
            // color: "secondary" 
        });
        console.log(event.currentTarget.value);
    }
    UpdateCoughing = (event) => {
      event.preventDefault()
        this.setState({
            Coughing: event.currentTarget.value,
            // color: "secondary" 
        });
        console.log(event.currentTarget.value);
    }
    UpdateBreathing = (event) => {
      event.preventDefault()
      this.setState({
          Breathing: event.currentTarget.value,
          // color: "secondary" 
      });
      console.log(event.currentTarget.value);
    }
    UpdateSoreThroat = (event) => {
      event.preventDefault()
        this.setState({
            SoreThroat: event.currentTarget.value,
            // color: "secondary" 
        });
        console.log(event.currentTarget.value);
    }
    UpdateSmell_Taste = (event) => {
      event.preventDefault()
        this.setState({
            Smell_Taste: event.currentTarget.value,
            // color: "secondary"
        });
        console.log(event.currentTarget.value);
    }
    UpdateVomiting = (event) => {
      event.preventDefault()
        this.setState({
            Vomiting: event.currentTarget.value,
            // color: "secondary"
        });
        console.log(event.currentTarget.value);
    }
    UpdateFatigue = (event) => {
      event.preventDefault()
        this.setState({
            Fatigue: event.currentTarget.value,
            // color: "secondary"
        });
        console.log(event.currentTarget.value);
    }
    UpdateMuscleAche = (event) => {
      event.preventDefault()
        this.setState({
            MuscleAche: event.currentTarget.value,
            // color: "secondary"
        });
        console.log(event.currentTarget.value);
    }
    UpdatePositive = (event) => {
      event.preventDefault()
        this.setState({
            Positive: event.currentTarget.value,
            // color: "secondary"
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
    console.log("user" + userId);
    
    var newPostKey = firebase.database().ref().child('questionAns').push().key;
    var updates = {};
    updates['/data/' + newPostKey] = docInfo;
    updates['/users/' + userId + '/' + newPostKey] = docInfo;
    firebase.database().ref().update(updates);

    if (this.state.Coughing == "Yes" & this.state.Breathing == "Yes" || this.state.Smell_Taste == "Yes" || 
    this.state.Smell_Taste == "Yes" &this.state.Fever == "Yes" &this.state.Coughing == "Yes" || this.state.Smell_Taste == "Yes" &this.state.Fever == "Yes" ||
    this.state.Coughing == "Yes" & this.state.Fever == "Yes" ||this.state.Smell_Taste == "Yes" & this.state.Breathing == "Yes" 
    ||this.state.Postive == "Yes" & this.state.Coughing == "Yes" || this.state.Positive == "Yes" &this.state.Smell_Taste == "Yes" ||
    this.state.Positive == "Yes" &this.state.Fever == "Yes" &this.state.Coughing == "Yes"  ){
      window.alert("You have the specific symptoms of Covid-19. You need to get Covid-19 tested!");
    }
    }
    
    render(){
    
        return(
            <div>  
              <ButtonAppBar/>
              
              <Container component="main" maxWidth="xs" style={{ maxWidth: "60%", padding: "3%"}}>
              <Typography  variant="h3" style={{textAlign:"center", margin:"auto"}}>
                   COVID-19 Questionarre
                  </Typography>
                  <Typography  variant="h5" style={{textAlign:"center", margin:"auto", padding: "3%"}}>
                   Fever of 100F, or feeling hot with chills:
                  </Typography>
                  <ButtonGroup disableElevation variant="contained" style={{textAlign:"center", margin:"auto" , padding: "3%"}}  fullWidth>
                    <Button
                      type="submit"
                      variant="contained"
                      color= "primary"
                      value= "Yes"
                      onClick = {this.UpdateFever.bind("Yes")}
                      //onClick={this.changeColor.bind(this)}
                      >
                        Yes</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color= {this.state.color}
                      value= "No"
                      onClick =  {this.UpdateFever.bind("No")}
                      //onClick={this.changeColor.bind(this)}
                      >
                        No</Button>
                   </ButtonGroup >
                   <Typography  variant="h5" style={{textAlign:"center", margin:"auto" , padding: "3%"}}>
                   Coughing unrelated to chronic condition:
                  </Typography>
                  <ButtonGroup disableElevation variant="contained"  style={{textAlign:"center", margin:"auto" , padding: "3%"}} fullWidth>
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "Yes"
                      onClick =  {this.UpdateCoughing.bind("Yes")}
                      //onClick={this.changeColor.bind("white")}
                      >
                        Yes</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "No"
                      onClick = {this.UpdateCoughing.bind("No")}
                      //onClick={this.changeColor.bind("white")}
                      >
                        No</Button>
                   </ButtonGroup>
                   <Typography  variant="h5" style={{textAlign:"center", margin:"auto" , padding: "3%"}} >
                   Difficulty breahting:
                  </Typography>
                  <ButtonGroup disableElevation variant="contained"  style={{textAlign:"center", margin:"auto" , padding: "3%"}} fullWidth>
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "Yes"
                      onClick =  {this.UpdateBreathing.bind("Yes")}
                     // onClick={this.changeColor.bind("white")}
                     >
                        Yes</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "No"
                      onClick = {this.UpdateBreathing.bind("No")}
                      //onClick={this.changeColor.bind(this)}
                      >
                        No</Button>
                  </ButtonGroup>
                  <Typography  variant="h5" style={{textAlign:"center", margin:"auto" , padding: "3%"}}>
                  Do you have a Sore Throat:
                  </Typography>
                  <ButtonGroup disableElevation variant="contained"  style={{textAlign:"center", margin:"auto" , padding: "3%"}} fullWidth>
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "Yes"
                      onClick =  {this.UpdateSoreThroat.bind("Yes")}
                      //onClick={this.changeColor.bind(this)}
                      >
                        Yes</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "No"
                      onClick = {this.UpdateSoreThroat.bind("No")}
                      //onClick={this.changeColor.bind(this)}
                      >
                        No</Button>
                   </ButtonGroup>
                   <Typography  variant="h5" style={{textAlign:"center", margin:"auto", padding: "3%"}}>
                   New loss of smell and/or taste:
                  </Typography>
                  <ButtonGroup disableElevation variant="contained"  style={{textAlign:"center", margin:"auto", padding: "3%"}}fullWidth>
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "Yes"
                      onClick =  {this.UpdateSmell_Taste.bind("Yes")}
                     // onClick={this.changeColor.bind(this)}
                     >
                        Yes</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "No"
                      onClick = {this.UpdateSmell_Taste.bind("No")}
                      //onClick={this.changeColor.bind(this)}
                      >
                        No</Button>
                   </ButtonGroup>
                   <Typography  variant="h5" style={{textAlign:"center", margin:"auto", padding: "3%"}}>
                   Are you Vomiting:
                  </Typography>
                  <ButtonGroup disableElevation variant="contained"  style={{textAlign:"center", margin:"auto", padding: "3%"}} fullWidth>
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "Yes"
                      onClick =  {this.UpdateVomiting.bind("No")}
                      //onClick={this.changeColor.bind(this)}
                      >
                        Yes</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "No"
                      onClick = {this.UpdateVomiting.bind("No")}
                     // onClick={this.changeColor.bind(this)}
                     >
                        No</Button>
                   </ButtonGroup>
                   <Typography  variant="h5" style={{textAlign:"center", margin:"auto", padding: "3%"}}>
                   Severe Fatigue:
                  </Typography>
                  <ButtonGroup disableElevation variant="contained"  style={{textAlign:"center", margin:"auto", padding: "3%"}} fullWidth>
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "Yes"
                      onClick =  {this.UpdateFatigue.bind("Yes")}
                      //onClick={this.changeColor.bind(this)}
                      >
                        Yes</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "No"
                      onClick = {this.UpdateFatigue.bind("No")}
                      //onClick={this.changeColor.bind(this)}
                      >
                        No</Button>
                   </ButtonGroup>
                   <Typography  variant="h5" style={{textAlign:"center", margin:"auto", padding: "3%"}}>
                   Severe muscle aches:
                  </Typography>
                  <ButtonGroup disableElevation variant="contained"  style={{textAlign:"center", margin:"auto", padding: "3%"}} fullWidth>
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "Yes"
                      onClick =  {this.UpdateMuscleAche.bind("Yes")}
                      //onClick={this.changeColor.bind(this)}
                      >
                        Yes</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "No"
                      onClick = {this.UpdateMuscleAche.bind("No")}
                     // onClick={this.changeColor.bind(this)}
                      >
                        No</Button>
                   </ButtonGroup>
                   <Typography variant="h5" style={{textAlign:"center", margin:"auto", padding: "3%"}}>
                    Have you tested Covid-19 Positive in the last 90 days?:
                  </Typography>
                  <ButtonGroup disableElevation variant="contained"  style={{textAlign:"center", margin:"auto", padding: "3%"}} fullWidth>
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "Yes"
                      onClick = {this.UpdatePositive.bind("Yes")}
                     // onClick={this.changeColor.bind(this)}
                     >
                        Yes</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value= "No"
                      onClick = {this.UpdatePositive.bind("No")}
                      //onClick={this.changeColor.bind(this)}
                      >
                        No</Button>
                   </ButtonGroup>
                    
                  <Button
                    style={{textAlign:"center", margin:"auto", padding: "2%"}}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick = {this.SubmitCovidAnswers}
                   // onClick={this.changeColor.bind(this)}
                    // primary = {true}
                    label ="Submit"
                    // className={classes.submit}
                    >Submit Answers
                  </Button>
                      
                </Container>
            </div>

//returnun
        );
    }
  }
    
  export default Questions;