import React, { Component } from 'react';

import './App.css';
//import Login from './Screen/Login.js';
import Welcome from './Screen/Welcome.js';
//import Login from './Screen/Login.js';
//mport SingleChat from './Componenti/SingleChat.js';
//import MenuTab from './Componenti/MenuTab';
//import Header from './Componenti/Header.js';
import SingleChat from './Componenti/SingleChat.js';
import MenuTab from './Componenti/MenuTab';
//import Header from './Componenti/Header';
import Recovery from './Screen/Recovery';
//import Header from './Componenti/Header.js';

class App extends Component {
  render() {
    return (
      <div>

        {/* <Welcome />

        <Header />
        <MenuTab />
       <SingleChat />*/}
        <Recovery />

      </div>
    );
  }
}

export default App;