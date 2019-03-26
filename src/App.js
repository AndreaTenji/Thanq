import React, { Component } from 'react';

import './App.css';
//import Login from './Screen/Login.js';
import Welcome from './Screen/Welcome.js';
import PasswordRecovery from './Screen/PasswordRecovery';
//import Login from './Screen/Login.js';
//import SingleChat from './Componenti/SingleChat.js';
//import MenuTab from './Componenti/MenuTab';
//import Header from './Componenti/Header.js';
=======
//mport SingleChat from './Componenti/SingleChat.js';
//import MenuTab from './Componenti/MenuTab';
//import Header from './Componenti/Header.js';
import SingleChat from './Componenti/SingleChat.js';
import MenuTab from './Componenti/MenuTab';
<<<<<<< HEAD
import Header from './Componenti/Header';
import Recovery from './Screen/Recovery';
=======
import Header from './Componenti/Header.js';
>>>>>>> bc4171deb5af824a9cdc4745c32aa7125af062fc
>>>>>>> 0150b708f88a1348040a2bac3cf964e5eb448e17

class App extends Component {
  render() {
    return (
      <div>

<<<<<<< HEAD
      <PasswordRecovery/>
=======
        <Welcome />

        <Header />
        <MenuTab />
        <SingleChat />
        <Recovery />
>>>>>>> 0150b708f88a1348040a2bac3cf964e5eb448e17

      </div>
    );
  }
}

export default App;