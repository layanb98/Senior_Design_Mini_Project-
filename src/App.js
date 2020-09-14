import React , { Component } from 'react';
import './App.css';
import ButtonAppBar from './Components/Header'
import SignUp from './Components/SignUp'
import * as firebase from 'firebase';

class App extends Component{
  constructor(){
    super();
    this.state ={};
  }

  render(){
    return (
      <div>
        <ButtonAppBar/>
        <SignUp/>
      </div>
    );
  } 
}

export default App;
