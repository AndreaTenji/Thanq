import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import Route from './Router'
//
import './App.css';
//
import FakeData from './FakeData'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      login: true,
      data: FakeData,
    }
  }

  render() {
    return (
      <div>
        <Router >
          <Route
            logout={() => this.setState({ login: false, })}
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
