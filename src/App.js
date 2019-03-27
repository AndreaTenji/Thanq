import React, { Component } from 'react';

import './App.css';
//import Login from './Screen/Login.js';
import Login from './Screen/Login';
import Welcome from './Screen/Welcome';
import MenuTab from './Componenti/MenuTab';
import Header from './Componenti/Header.js';
import Messages from './Screen/Messages'
import Favorite from './Screen/Favorite'
import Profile from './Screen/Profile'
export default class App extends Component {

  constructor(props) {
    super(props)
    this.viewScreen = this.viewScreen.bind(this)
    this.authLogin = this.authLogin.bind(this)
    this.state = {
      currentView: 'Welcome',
      login: true,
    }
  }

  viewScreen(screen) {
    this.setState({
      currentView: screen
    })
  }

  authLogin() {
    this.setState({
      login: true,
    })
  }

  render() {

    if (!this.state.login) {
      return (
        <div>
          {this.state.currentView === 'Welcome' ?
            <Welcome
              actionLogin={() => this.viewScreen('Login')}
            /> :
            <Login
              authLogin={this.authLogin}
            />}
        </div>
      )
    }

    return (
      <div>
        <Header />
        <MenuTab
          actionMessage={() => this.viewScreen('Messages')}
          actionFavorite={() => this.viewScreen('Favorite')}
          actionProfile={() => this.viewScreen('Profile')}
          currentView={this.state.currentView}
        />
        <div style={{ backgroundColor: '#D3ABF0' }}>
          {this.state.currentView === 'Messages' && <Messages />}
          {this.state.currentView === 'Favorite' && <Favorite />}
          {this.state.currentView === 'Profile' && <Profile />}
        </div>

      </div >
    );
  }
}
