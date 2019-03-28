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
import ChangeProfileImg from './Screen/ChangeProfileImg'
import ChangeBackground from './Screen/ChangeBackground'
import ChangeTextSize from './Screen/ChangeTextSize'
export default class App extends Component {

  constructor(props) {
    super(props)
    this.viewScreen = this.viewScreen.bind(this)
    this.authLogin = this.authLogin.bind(this)
    this.logout = this.logout.bind(this)
    this.state = {
      currentView: 'Messages',
      login: true,
    }
  }

  viewScreen(screen) {
    this.setState({
      currentView: screen
    })
  }

  logout() {
    this.setState({
      currentView: 'Welcome',
      login: false,
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
    if (this.state.currentView === 'ChangeProfileImg') {
      return <ChangeProfileImg actionBack={() => this.viewScreen('Profile')} />
    }
    if (this.state.currentView === 'ChangeBackground') {
      return <ChangeBackground actionBack={() => this.viewScreen('Profile')} />
    }
    if (this.state.currentView === 'ChangeTextSize') {
      return <ChangeTextSize actionBack={() => this.viewScreen('Profile')} />
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

        <div style={{ backgroundColor: '#C39BE1', paddingTop: '120px' }}>
          {this.state.currentView === 'Messages' && <Messages actionSingleChat={(x) => this.viewScreen(x)} />}
          {this.state.currentView === 'Favorite' && <Favorite actionSingleChat={(x) => this.viewScreen(x)} />}
          {this.state.currentView === 'Profile' && <Profile actionSetting={(x) => this.viewScreen(x)} actionLogout={this.logout} />}
        </div>
      </div>

    );
  }
}
