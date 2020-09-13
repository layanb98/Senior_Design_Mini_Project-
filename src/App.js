import React , { Component } from 'react';
import './App.css';
import ButtonAppBar from './Components/Header'
import SignUp from './Components/login'

class App extends Component{
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
