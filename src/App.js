import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Grid from './components/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>2048</h2>
        </div>   
        <p className="App-intro">
          To start, click button Start Game.
          To move tiles, press up down left right button.
        </p>
        <div className="App-container">
          <Grid />
        </div>
      </div>
    );
  }
}

export default App;
