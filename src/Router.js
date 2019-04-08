import React from "react"
import { Route, Redirect } from "react-router-dom"
import { BrowserRouter as Switch } from "react-router-dom"
import PropsTypes from 'prop-types'
import LandingPage from "./Screen/LandingPage";
import Chat from "./Screen/Chat";
import Prova from "./Prova";
import ErrorScreen from "./Screen/Error";
import Login from './Screen/Login'
export default class Router extends React.Component {

    render() {
        const { login, data, chatList, messages, profile, authLogin, logout, userID } = this.props

        if (login) {
            return (
                <Switch>
                    <Route exact path="/login/" render={() => <Redirect to='/messages/' />} />
                    <Route exact path="/" render={() => <LandingPage screen={'Messages'} messages={messages} />} />
                    <Route exact path="/chat/" render={() => <Redirect to='/messages/' />} />
                    <Route path="/settings/" render={() => <Redirect to='/profile/' />} />
                    <Route path="/prova/:vediamo" render={(props) => <Prova {...props} testo={'ahahah'} />} />
                    <Route path="/chat/:id" render={(props) => <Chat {...props} userID={userID} sendMessages={this.props.sendMessages} data={data} />} />
                    <Route path="/messages/" render={() => <LandingPage screen={'Messages'} profile={profile} logout={logout} messages={messages} chatList={chatList} />} />
                    <Route path="/favorite/" render={() => <LandingPage screen={'Favorite'} profile={profile} logout={logout} messages={messages} />} />
                    <Route path="/profile/" render={() => <LandingPage screen={'Profile'} profile={profile} logout={logout} messages={messages} />} />
                    <Route exact path="/error/" component={ErrorScreen} />
                    {/* <Redirect to='messages' /> */}
                    {/* <Route render={() => { console.log('redirect'); return <Redirect to="/messages/" /> }} /> */}
                </Switch>
            )
        } else {
            return (
                <Switch>
                    <Route render={() => <Login authLogin={authLogin} />} />
                </Switch>
            )
        }
    }
}

Router.propsTypes = {
    login: PropsTypes.bool,
    data: PropsTypes.object,
    messages: PropsTypes.object,
    profile: PropsTypes.object,
    authLogin: PropsTypes.func,
    logout: PropsTypes.func,
}
