import React , { Component } from 'react';
import './App.css';
import SignUp from './Components/SignUp';
import Questions from './Components/questions';
import * as firebase from 'firebase';
import {db_Logout} from './Components/DatabaseManager'



class App extends Component{
  constructor(){
    super();
    this.state ={};

  }
  componentWillMount(){
    var that = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        that.setState({user: 1});
        console.log("there is a user");
        console.log(user.uid);
        //db_Logout();
        return true;
      } else {
        that.setState({user: 0});
        console.log("there is no user");
        return false;
      }
    });
  }
    
  render(){
    return (
      <div>
        { !this.state.user? <SignUp/> : <Questions/>  }
      </div>
    );
  } 
}

export default App;
