import React from 'react'
import './MenuTab.css'
import IconFavorite from './images/icon_favorite_purple.svg'
import IconMessage from './images/icon_messages.svg'
import IconProfile from './images/icon_profile.svg'

export default class MenuTab extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            screenMessages: true,
            screenFavorites: false,
            screenProfile: false,
        }
    }

    mostraMessages() {
        this.setState({
            screenMessages: true,
            screenFavorites: false,
            screenProfile: false,
        })
    }
    mostraFavorites() {
        this.setState({
            screenMessages: false,
            screenFavorites: true,
            screenProfile: false,
        })
    }
    mostraProfile() {
        this.setState({
            screenMessages: false,
            screenFavorites: false,
            screenProfile: true,
        })
    }


    render() {

        return (

            <div className='menuTabDisplay'>
                <div onClick={() => this.mostraMessages()} className='oneTab'>

                    {(this.state.screenMessages) ? <p> Messages </p> : <img
                        width='35px'
                        src={IconMessage}
                        alt="Icon Message"
                    />}

                </div>

                <div onClick={() => this.mostraFavorites()} className='oneTab'>

                    {(this.state.screenFavorites) ? <p> Favorite </p> : <img
                        width='35px'
                        src={IconFavorite}
                        alt="Icon Favorite"
                    />}

                </div>

                <div onClick={() => this.mostraProfile()} className='oneTab'>

                    {(this.state.screenProfile) ? <p> Profile </p> : <img
                        width='35px'
                        src={IconProfile}
                        alt="Icon Profile"
                    />}

                </div>

            </div>
        )
    }
}