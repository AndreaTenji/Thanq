import React from "react"
import { Route, Redirect } from "react-router-dom"
import PropsTypes from 'prop-types'

import LandingPage from "./Screen/LandingPage";
import Chat from "./Screen/Chat";
import Prova from "./Prova";
import ErrorScreen from "./Screen/Error";
import Login from './Screen/Login'
export default class Routes extends React.Component {


    render() {
        const { data, messages, profile } = this.props
        return (
            <div>
                <Route exact path="/" render={() => <Redirect to='/messages/' />} />
                <Route exact path="/chat/" render={() => <Redirect to='/messages/' />} />
                <Route path="/settings/" render={() => <Redirect to='/profile/' />} />
                <Route path="/prova/:vediamo" render={(props) => <Prova {...props} testo={'ahahah'} />} />
                <Route path="/chat/:id" render={(props) => <Chat {...props} data={data} />} />
                <Route path="/messages/" render={() => <LandingPage screen={'Messages'} messages={messages} />} />
                <Route path="/favorite/" render={() => <LandingPage screen={'Favorite'} messages={messages} />} />
                <Route path="/profile/" component={() => <LandingPage screen={'Profile'} profile={profile} />} />
                <Route exact path="/error/" component={ErrorScreen} />
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
}
