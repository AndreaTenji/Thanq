import React, { Component } from 'react';
import './App.css';
import Login from './Screen/Login';
import Welcome from './Screen/Welcome';
import Chat from './Screen/Chat'
import ChangePassword from './Screen/ChangePassword'
import ChangeProfileImg from './Screen/ChangeProfileImg'
import ChangeBackground from './Screen/ChangeBackground'
import ChangeTextSize from './Screen/ChangeTextSize'
import LandingPage from './Screen/LandingPage';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.viewScreen = this.viewScreen.bind(this)
    this.authLogin = this.authLogin.bind(this)
    this.logout = this.logout.bind(this)
    this.state = {
      currentView: 'LandingPage',
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
      login: false,
    })
  }
  authLogin() {
    this.setState({
      login: true,
    })
  }

  componentDidMount() {
    if (!this.state.login) {
      this.setState({
        currentView: 'Welcome'
      })
    }
  }

  render() {
    const ROUTES = {
      'Welcome': () => <Welcome actionBotton={this.viewScreen} />,
      'Login': () => <Login authLogin={this.authLogin} />,
      'ChangePassword': () => <ChangePassword actionBack={() => this.viewScreen('Profile')} />,
      'ChangeBackground': () => <ChangeBackground actionBack={() => this.viewScreen('Profile')} />,
      'ChangeProfileImg': () => <ChangeProfileImg actionBack={() => this.viewScreen('Profile')} />,
      'ChangeTextSize': () => <ChangeTextSize actionBack={() => this.viewScreen('Profile')} />,
      'Chat': () => <Chat actionBack={(x) => this.viewScreen(x)} />,
      'LandingPage': () => <LandingPage viewScreen={this.viewScreen} currentView={this.state.currentView} />,
    }

    const Comp = ROUTES[this.state.currentView] || <LandingPage />

    return (
      <div>
        <Comp />
      </div>
    )

  }
}
