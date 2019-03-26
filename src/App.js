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
    this.viewMessage = this.viewMessage.bind(this)
    this.viewFavorite = this.viewFavorite.bind(this)
    this.viewProfile = this.viewProfile.bind(this)
    this.viewLogin = this.viewLogin.bind(this)
    this.authLogin = this.authLogin.bind(this)
    this.state = {
      currentView: 'Welcome',
      login: true,
    }
  }
  authLogin() {
    this.setState({
      login: true,
    })
  }

  viewLogin() {
    this.setState({
      currentView: 'Login'
    })
  }
  viewMessage() {
    this.setState({
      currentView: 'Messages'
    })
  }
  viewFavorite() {
    this.setState({
      currentView: 'Favorite'
    })
  }
  viewProfile() {
    this.setState({
      currentView: 'Profile'
    })
  }


  render() {

    if (!this.state.login) {
      return (
        <div>
          {this.state.currentView === 'Welcome' ?
            <Welcome
              actionLogin={this.viewLogin}
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
          actionMessage={this.viewMessage}
          actionFavorite={this.viewFavorite}
          actionProfile={this.viewProfile}
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
