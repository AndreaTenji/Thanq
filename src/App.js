import React, { Component } from 'react';

import './App.css';
import Login from './Screen/Login.js';
import Welcome from './Screen/Welcome.js';
//import Login from './Screen/Login.js';
import SingleChat from './Componenti/SingleChat.js';
import MenuTab from './Componenti/MenuTab';
import Header from './Componenti/Header.js';

class App extends Component {
  render() {
    return (

      <div>

        <Header />
        <MenuTab />
        <SingleChat />

      </div>
    );
  }
}

export default App;