import React from 'react'
import './MenuTab.css'
import IconFavorite from './images/icon_favorite_purple.svg'
import IconMessage from './images/icon_messages.svg'
import IconProfile from './images/icon_profile.svg'

export default class MenuTab extends React.Component {

    render() {
        const { currentView } = this.props

        return (

            <div className='menuTabDisplay'>

                <div onClick={() => this.props.actionTab('Messages')} className='oneTab'>

                    {(currentView === 'Messages') ? <p> Messages </p> : <img
                        width='40px'
                        src={IconMessage}
                        alt="Icon Message"
                    />}

                </div>

                <div onClick={() => this.props.actionTab('Favorite')} className='oneTab'>

                    {(currentView === 'Favorite') ? <p> Favorite </p> : <img
                        width='40px'
                        src={IconFavorite}
                        alt="Icon Favorite"
                    />}

                </div>

                <div onClick={() => this.props.actionTab('Profile')} className='oneTab'>

                    {(currentView === 'Profile') ? <p> Profile </p> : <img
                        width='40px'
                        src={IconProfile}
                        alt="Icon Profile"
                    />}

                </div>

            </div>
        )
    }
}