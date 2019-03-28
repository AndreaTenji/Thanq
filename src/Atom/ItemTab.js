import React from 'react'
import { IconMessages, IconFavoritePurple, IconProfile } from './Icons'
export default class ItemTab extends React.Component {
    render() {
        const { tabTitle, active } = this.props

        if (tabTitle === 'Messages') {
            if (active) {
                return (
                    <p>
                        {tabTitle}
                    </p>
                )

            } return (
                <div>
                    <IconMessages />
                </div>
            )
        }
        if (tabTitle === 'Favorite') {
            if (active) {
                return (
                    <p>
                        {tabTitle}
                    </p>
                )

            } return (
                <div>
                    <IconFavoritePurple />
                </div>
            )
        }
        if (tabTitle === 'Profile') {
            if (active) {
                return (
                    <p>
                        {tabTitle}
                    </p>
                )

            } return (
                <div>
                    <IconProfile />
                </div>
            )
        }
    }
}
