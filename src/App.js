import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Donaciones Fuerza México</h1>
        </header>
        <p className="App-intro">
          Recopilación de los anunciós públicos sobre donacionas para ayudar a las personas afectadas por los sismos del 7 de septiembre y 19 de septiembre.
        </p>
      </div>
    );
  }
}

export default App;
