import React, { Component } from 'react';

import './App.css';
//import Login from './Screen/Login.js';
import Welcome from './Screen/Welcome.js';
import Login from './Screen/Login.js';
//mport SingleChat from './Componenti/SingleChat.js';
//import MenuTab from './Componenti/MenuTab';
//import Header from './Componenti/Header.js';
import SingleChat from './Componenti/SingleChat.js';
import MenuTab from './Componenti/MenuTab';
import Header from './Componenti/Header.js';
import ChatInput from './Componenti/ChatInput';
class ParentComponent extends Component {
  constructor(props) {
    this.state = {message: 'Hello!'};
    // Binding necessario per accede all'oggetto state all'interno del metodo handleClick.
   this.handleClick = this.handleClick.bind(this);
  }
}
class App extends Component {
  render() {
    

    return (
      <div>

        <Welcome />

        <Header/>
        <MenuTab />
        <SingleChat />
        <ChatInput />
      </div>
    );
  }
}

export default App;