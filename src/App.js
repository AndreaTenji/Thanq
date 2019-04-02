import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory'
import { Router } from "react-router-dom"
import Route from './Router'
//
import './App.css';
//
import FakeData from './FakeData'

export default class App extends Component {

  constructor(props) {
    super(props)

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
            login={this.state.login}
            authLogin={() => this.setState({ login: true, })}
            profile={this.state.data}
            data={this.state.data}
            messages={this.state.data.contactsChat} />
        </Router>
      </div>
    )

  }
}
