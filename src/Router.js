import React from "react"
import { Route, Redirect } from "react-router-dom"
import PropsTypes from 'prop-types'
import MediaQuery from 'react-responsive';

import LandingPage from "./Screen/LandingPage";
import Chat from "./Screen/Chat";
import Prova from "./Prova";
import ErrorScreen from "./Screen/Error";
import Login from './Screen/Login'
import MenuTab from "./Componenti/MenuTab";
import Header from "./Componenti/Header";
import Messages from "./Screen/Messages";
export default class Routes extends React.Component {

    render() {
        const { login, data, messages, profile, authLogin, logout, } = this.props

        if (login) {
            return (
                <div>
                    <MediaQuery query="(max-width: 900px)">
                        <Route exact path="/" render={() => <LandingPage screen={'Messages'} messages={messages} />} />
                        <Route exact path="/chat/" render={() => <Redirect to='/messages/' />} />
                        <Route path="/settings/" render={() => <Redirect to='/profile/' />} />
                        <Route path="/prova/:vediamo" render={(props) => <Prova {...props} testo={'ahahah'} />} />
                        <Route path="/chat/:id" render={(props) => <Chat {...props} data={data} />} />
                        <Route path="/messages/" render={() => <LandingPage screen={'Messages'} messages={messages} />} />
                        <Route path="/favorite/" render={() => <LandingPage screen={'Favorite'} messages={messages} />} />
                        <Route path="/profile/" render={() => <LandingPage screen={'Profile'} profile={profile} logout={logout} />} />
                        <Route exact path="/error/" component={ErrorScreen} />

                    </MediaQuery>

                    <MediaQuery query="(min-width: 900px)">
                        <Route exact path="/" render={() => <LandingPage screen={'Favorite'} messages={messages} />} />
                        <Route path="/messages/" render={() => <LandingPage screen={'Messages'} messages={messages} />} />
                        <Route path="/favorite/" render={() => <LandingPage screen={'Favorite'} messages={messages} />} />
                        <Route path="/profile/" render={() => <LandingPage screen={'Profile'} profile={profile} logout={logout} />} />
                    </MediaQuery>

                </div>
            )
        }

        return (
            <div>
                <Route render={() => <Login authLogin={authLogin} />} />
            </div>
        )
    }
}

Routes.propsTypes = {
    login: PropsTypes.bool,
    data: PropsTypes.object,
    messages: PropsTypes.object,
    profile: PropsTypes.object,
    authLogin: PropsTypes.func,
    logout: PropsTypes.func,
}
