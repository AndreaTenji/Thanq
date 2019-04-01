import React from 'react';
import Header from './../Componenti/Header'
import MenuTab from './../Componenti/MenuTab'
import Messages from './../Screen/Messages'
import Favorite from './../Screen/Favorite'
import Profile from './../Screen/Profile'

export default class LandingPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentScreen: 'Messages'
        }
    }
    render() {

        return (
            < div >
                <div style={{ position: "fixed", zIndex: 3 }}>
                    <Header />
                    <MenuTab
                        currentView={this.props.screen}
                        actionTab={(x) => this.setState({ currentScreen: x })}
                    />
                </div>

                <div style={{ backgroundColor: '#C39BE1', paddingTop: '120px' }}>
                    {this.props.screen === 'Messages' && <Messages messages={this.props.messages} actionSingleChat={(x) => this.props.viewScreen(x)} />}
                    {this.props.screen === 'Favorite' && <Favorite messages={this.props.messages} actionSingleChat={(x) => this.props.viewScreen(x)} />}
                    {this.props.screen === 'Profile' && <Profile actionSetting={(x) => this.props.viewScreen(x)} actionLogout={this.logout} />}
                </div>
            </div >

        )
    }
}