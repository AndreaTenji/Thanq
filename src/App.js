import React, { Component } from 'react';

import './App.css';
//import Login from './Screen/Login.js';
import Login from './Screen/Login';
import Welcome from './Screen/Welcome';
import MenuTab from './Componenti/MenuTab';
import Header from './Componenti/Header.js';
import ChatInput from './Componenti/ChatInput';
import Messages from './Screen/Messages'
import Favorite from './Screen/Favorite'
import Profile from './Screen/Profile'
s App extends Component {
  
  tructor(props) {
super(props)
    this.viewMessage = this.viewMessage.bind(this)
  this.viewFavorite = this.viewFavorite.bind(this)
  this.viewProfile = this.viewProfile.bind(this)
    is.viewLogin = this.viewLogin.bind(this)
  this.authLogin = this.authLogin.bind(this)

  this.state = {
    currentView: 'Welcome',
    login: false,
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
ewProfile() {
    this.setState({
      currentView: 'Profile'
    })
  }

  
    er() {
      
    if (!this .state.login) {
      return (
      <div>
          {this.state.currentView === 'Welcome' ?
            <Welcome
            actionLogin={this.viewLogin}
          /> :
          <Login
            authLogin={this.authLogin}
          />}
        div>
        
        
      
      return (
      <div>
        <Header />
        <MenuTab
          actionMessage={this.viewMessage}
          actionFavorite={this.viewFavorite}
          actionProfile={this.viewProfile}
          currentView={this.state.currentView}
        />
        {this.state.currentView === 'Messages' && <Messages />}
        {this.state.currentView === 'Favorite' && <Favorite />}
        {this.state.currentView === 'Profile' && <Profile />}
      </div>
    );
  }
}

export default App;