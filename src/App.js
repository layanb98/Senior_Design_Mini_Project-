import React , { Component } from 'react';
import './App.css';
import SignUp from './Components/SignUp'
import Questions from './Components/questions'


class App extends Component{
  constructor(){
    super();
    this.state ={};
  }
  render(){
    return (
      <div>
        { !this.state.user ? <SignUp/> : <Questions currentUser={this.state.user}/> }
      </div>
    );
  } 
}

export default App;
