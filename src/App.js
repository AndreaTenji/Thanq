import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory'
import { Router } from "react-router-dom"
import Route from './Router'
//
import './App.css';
import Login from './Screen/Login';
import Welcome from './Screen/Welcome';
import Chat from './Screen/Chat'
import ChangePassword from './Screen/ChangePassword'
import ChangeProfileImg from './Screen/ChangeProfileImg'
import ChangeBackground from './Screen/ChangeBackground'
import ChangeTextSize from './Screen/ChangeTextSize'
import LandingPage from './Screen/LandingPage';
//
import FakeData from './FakeData'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.viewScreen = this.viewScreen.bind(this)
    this.authLogin = this.authLogin.bind(this)
    this.logout = this.logout.bind(this)
    this.state = {
      currentView: 'LandingPage',
      login: true,
      data: FakeData,
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
    const history = createHistory()
    return (
      <div>
        <Router history={history}>
          <Route
            profile={this.state.data}
            data={this.state.data}
            messages={this.state.data.contactsChat} />
        </Router>
      </div>
    )

  }
}
