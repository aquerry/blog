import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const imgs = require.context("../public", true, /.*\.jpg$/)

const renderImages = imgs.keys().map((path) => (<img src={path} alt=""/>))

class App extends Component {
  componentDidMount() {
    console.log("this is not working dammit")
    console.log(imgs.keys())
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello Beautiful World</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {renderImages}
      </div>
    );
  }
}

export default App;
