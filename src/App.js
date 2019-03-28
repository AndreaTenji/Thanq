import React, { Component } from 'react';

import './App.css';
//import Login from './Screen/Login.js';
import Welcome from './Screen/Welcome.js';
import PasswordRecovery from './Screen/PasswordRecovery';
import Conversation from './Screen/Conversation'
class App extends Component {
  render() {
    return (
      <div>

      <Conversation/>

      </div>
    );
  }
}

export default App;