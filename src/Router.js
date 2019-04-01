import React from "react"
import { Route, Redirect } from "react-router-dom"
import LandingPage from "./Screen/LandingPage";
import Chat from "./Screen/Chat";
import Prova from "./Prova";
import ErrorScreen from "./Screen/Error";
export default class Routes extends React.Component {

    render() {

        return (
            <div>
                <Route exact path="/" render={() => <LandingPage screen={'Messages'} messages={this.props.messages} />} />
                <Route exact path="/chat/" render={() => <Redirect to='/messages/' />} />
                <Route path="/settings/" render={() => <Redirect to='/profile/' />} />
                <Route path="/prova/:vediamo" render={(props) => <Prova {...props} testo={'ahahah'} />} />
                <Route path="/chat/:id" render={(props) => <Chat {...props} data={this.props.data} />} />
                <Route path="/messages/" render={() => <LandingPage screen={'Messages'} messages={this.props.messages} />} />
                <Route path="/favorite/" render={() => <LandingPage screen={'Favorite'} messages={this.props.messages} />} />
                <Route path="/profile/" component={() => <LandingPage screen={'Profile'} messages={this.props.messages} />} />
                <Route exact path="/error/" component={ErrorScreen} />
                {/* <Route render={() => <div> 404 </div>} /> */}
            </div>
        )
    }

}

