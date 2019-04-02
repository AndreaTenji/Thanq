import React from 'react'

import { Link } from 'react-router-dom'
import PropsTypes from 'prop-types'

import './MenuTab.css'
import ItemTab from './../Atom/ItemTab'

export default class MenuTab extends React.Component {

    render() {
        const { currentView } = this.props

        return (
            <div className='menuTabDisplay'>
                <Link className='oneTab' to='/messages'>
                    <div>

                        {(currentView === 'Messages') ?
                            <ItemTab tabTitle='Messages' active={true} /> :
                            <ItemTab tabTitle='Messages' active={false} />}

                    </div>
                </Link>

                <Link className='oneTab' to='/favorite'>
                    <div className='oneTab'>

                        {(currentView === 'Favorite') ?
                            <ItemTab tabTitle='Favorite' active={true} /> :
                            <ItemTab tabTitle='Favorite' active={false} />}

                    </div>
                </Link>
                <Link className='oneTab' to='/profile'>
                    <div onClick={() => this.props.actionTab('Profile')} className='oneTab'>

                        {(currentView === 'Profile') ?
                            <ItemTab tabTitle='Profile' active={true} /> :
                            <ItemTab tabTitle='Profile' active={false} />}

                    </div>
                </Link>
            </div >
        )
    }
}

MenuTab.propsTypes = {
    currentView: PropsTypes.string,
}