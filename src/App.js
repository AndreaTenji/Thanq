import React, { Component } from 'react';

import './App.css';
//import Login from './Screen/Login.js';
import SingleChat from './Componenti/SingleChat.js';
import MenuTab from './Componenti/MenuTab';
import Header from './Componenti/Header.js';
import Sfondo from './Componenti/Sfondo';

class App extends Component {
  render() {
    return (
      <div>
     
        <Sfondo title='titolo' />

      </div>
    );
  }
}

export default App;
