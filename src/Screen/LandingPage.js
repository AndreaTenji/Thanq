import React from 'react';
import Header from './../Componenti/Header'
import MenuTab from './../Componenti/MenuTab'
import Messages from './../Screen/Messages'
import Favorite from './../Screen/Favorite'
import Profile from './../Screen/Profile'
import MediaQuery from 'react-responsive';


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
                <MediaQuery query="(max-width: 900px)">
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
                        {this.props.screen === 'Profile' && <Profile profile={this.props.profile} logout={this.props.logout} actionSetting={(x) => this.props.viewScreen(x)} />}
                    </div>
                </MediaQuery>

                <MediaQuery query="(min-width: 900px)">
                    <div style={{ display: 'flex' }}>

                        <MenuTab
                            currentView={this.props.screen}
                            actionTab={(x) => this.setState({ currentScreen: x })}
                        />

                        <div style={{ display: 'flex', flexDirection: 'column' }}>

                            <div style={{ position: "fixed", zIndex: 3 }}>
                                <Header />
                            </div>
                            <div style={{ backgroundColor: '#C39BE1', paddingTop: '70px' }}>
                                {this.props.screen === 'Messages' && <Messages messages={this.props.messages} actionSingleChat={(x) => this.props.viewScreen(x)} />}
                                {this.props.screen === 'Favorite' && <Favorite messages={this.props.messages} actionSingleChat={(x) => this.props.viewScreen(x)} />}
                                {this.props.screen === 'Profile' && <Profile profile={this.props.profile} logout={this.props.logout} actionSetting={(x) => this.props.viewScreen(x)} />}
                            </div>

                        </div>
                        <div style={{ flex: 1, backgroundColor: 'red' }}>
                            Prova
                            </div>
                    </div>




                </MediaQuery>



            </div >

        )
    }
}