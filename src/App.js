import React, { Component } from 'react';
import './App.css';
import Login from './Screen/Login';
import Welcome from './Screen/Welcome';
import MenuTab from './Componenti/MenuTab';
import Header from './Componenti/Header.js';
import Messages from './Screen/Messages'
import Favorite from './Screen/Favorite'
import Profile from './Screen/Profile'
import Chat from './Screen/Chat'
import ChangePassword from './Screen/ChangePassword'
export default class App extends Component {

  constructor(props) {
    super(props)
    this.viewScreen = this.viewScreen.bind(this)
    this.authLogin = this.authLogin.bind(this)
    this.state = {
      currentView: 'Chat',
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
            />
          }
        </div>
      )
    }

    //IMPOSTAZIONI

    if (this.state.currentView === 'ChangePassword') {
      return <ChangePassword actionBack={() => this.viewScreen('Profile')} />
    }
    //CHAT
    if (this.state.currentView === 'Chat') {
      return <Chat actionBack={(x) => this.viewScreen(x)} />
    }
    return (
      <div>
        <div style={{ position: "fixed", zIndex: 3 }}>
          <Header />
          <MenuTab
            currentView={this.state.currentView}
            actionMessage={() => this.viewScreen('Messages')}
            actionFavorite={() => this.viewScreen('Favorite')}
            actionProfile={() => this.viewScreen('Profile')}
          />
        </div>

        <div style={{ backgroundColor: '#D3ABF0', paddingTop: '120px' }}>
          {this.state.currentView === 'Messages' && <Messages />}
          {this.state.currentView === 'Favorite' && <Favorite />}
          {this.state.currentView === 'Profile' && <Profile actionSetting={() => this.viewScreen('ChangePassword')} />}
        </div>
      </div>

    );
  }
}
