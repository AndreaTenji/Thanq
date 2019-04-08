import React, { Component } from 'react';
import Firebase from 'firebase'
import Router from './Router'
import { getProfile, postMessages, getMessages, getChats, getAllUsers } from './utils/Firebase'
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
      chatList: 'ciao',
      dataContacts: null,
    }
  }


  loginEmail(email, password) {
    Firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        this.setState({ id: user.user.uid });

        console.log('UID = ' + this.state.id);

        getProfile(this.state.id)

          .then(profile => {
            this.setState({ profile: profile });
            console.log('PROFILO = ' + JSON.stringify(this.state.profile))
          })

        getChats(this.state.id)
          .then(chatList => {
            this.setState({ chatList: chatList })
            console.log('CHATLIST = ' + (this.state.chatList))
          })
          .then(() => {
            getAllUsers()
              .then(allChats => {
                this.setState({
                  dataContacts: allChats,
                });
                this.setState({
                  login: true
                })
              })
          })

      })
  }

  sendMessages(userID, chatID, text) {
    postMessages(userID, chatID, text)
  }


  render() {
    return (
      <div>
        <Router
          chatList={this.state.chatList}
          messaggesList={this.state.chatList}
          sendMessages={this.sendMessages}
          logout={() => this.setState({ login: false, })}
          authLogin={this.loginEmail}
          login={this.state.login}
          profile={this.state.profile}
          data={this.state.data}
          userID={this.state.id}
          messages={this.state.data.contactsChat} />
      </div>
    )
  }
}
