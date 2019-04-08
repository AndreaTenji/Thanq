import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import Firebase from 'firebase'
import Route from './Router'
import { getProfile } from './utils/Firebase'
//
import './App.css';
//
import FakeData from './FakeData'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.loginEmail = this.loginEmail.bind(this)
    this.state = {
      id: null,
      login: false,
      data: FakeData,
      profile: null,
    }
  }


  loginEmail(email, password) {
    Firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        this.setState({ id: user.user.uid, login: true, });
        console.log('UID = ' + this.state.id);
        getProfile(this.state.id)
          .then(profile => {
            this.setState({ profile: profile });
            console.log('PROFILO = ' + this.state.profile)
          })
      })
  }

  render() {
    return (
      <div>
        <Router >
          <Route
            logout={() => this.setState({ login: false, })}
            authLogin={this.loginEmail}
            login={this.state.login}
            profile={this.state.data}
            data={this.state.data}
            messages={this.state.data.contactsChat} />
        </Router>
      </div>
    )
  }
}
