import React from "react"
import { Route, Redirect } from "react-router-dom"
import LandingPage from "./Screen/LandingPage";
import Chat from "./Screen/Chat";
export default class Routes extends React.Component {

    render() {

        return (
            <div>
                <Route exact path="/chat/" render={() => <Redirect to='/messages/' />} />
                <Route exact path="/settings/" render={() => <Redirect to='/profile/' />} />
                <Route path="/chat/:id" component={Chat} />
                <Route path="/messages/" render={() => <LandingPage screen={'Messages'} messages={this.props.messages} />} />
                <Route path="/favorite/" render={() => <LandingPage screen={'Favorite'} messages={this.props.messages} />} />
                <Route path="/profile/" component={() => <LandingPage screen={'Profile'} messages={this.props.messages} />} />
                <Route exact path="/" render={() => <LandingPage screen={'Messages'} messages={this.props.messages} />} />
                <Route render={() => <div> 404 </div>} />
            </div>
        )
    }

}

