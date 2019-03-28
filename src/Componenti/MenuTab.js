import React from 'react'
import './MenuTab.css'
import ItemTab from './../Atom/ItemTab'

export default class MenuTab extends React.Component {

    render() {
        const { currentView } = this.props

        return (

            <div className='menuTabDisplay'>

                <div onClick={() => this.props.actionTab('Messages')} className='oneTab'>

                    {(currentView === 'Messages') ?
                        <ItemTab tabTitle='Messages' active={true} /> :
                        <ItemTab tabTitle='Messages' active={false} />}

                </div>

                <div onClick={() => this.props.actionTab('Favorite')} className='oneTab'>

                    {(currentView === 'Favorite') ?
                        <ItemTab tabTitle='Favorite' active={true} /> :
                        <ItemTab tabTitle='Favorite' active={false} />}

                </div>

                <div onClick={() => this.props.actionTab('Profile')} className='oneTab'>

                    {(currentView === 'Profile') ?
                        <ItemTab tabTitle='Profile' active={true} /> :
                        <ItemTab tabTitle='Profile' active={false} />}

                </div>

            </div>
        )
    }
}