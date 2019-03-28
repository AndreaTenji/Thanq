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
      messages: [
        {
          Name: "Nara",
          Surname: "Stabo",
          Job: "Sales",
          LastMessage: "Ahooooo"
        },
        {
          Name: "Abdula",
          Surname: "Iuguraia",
          Job: "Sales",
          LastMessage: "Ce credi?"
        },
        {
          Name: "Mozzo",
          Surname: "Zozzo",
          Job: "Sales",
          LastMessage: "No vabbeeeee"
        },
        {
          Name: "Peter",
          Surname: "Petrelli",
          Job: "Sales",
          LastMessage: "Oh hai visto quella? Je 'scivano le bolle de sapone daa recchie"
        },
        {
          Name: "Alfonso",
          Surname: "Pedretti",
          Job: "Sales",
          LastMessage: "Veramente me chiamo Arfonzo"
        },
      ]
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
      'LandingPage': () => <LandingPage messages={this.state.messages} viewScreen={this.viewScreen} currentView={this.state.currentView} />,
    }

    const Comp = ROUTES[this.state.currentView] || ROUTES['LandingPage']

    return (
      <div>
        <Comp />
      </div>
    )

  }
}
