import React, { Component } from 'react';

import './App.css';
//import Login from './Screen/Login.js';
import SingleChat from './Componenti/SingleChat.js';
import Header from './Componenti/Header.js';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <SingleChat />
      </div>
    );
  }
}

export default App;
