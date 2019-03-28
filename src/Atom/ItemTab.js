import React from 'react'
import { IconMessages, IconFavoritePurple, IconProfile } from './Icons'
export default class ItemTab extends React.Component {
    render() {
        const { tabTitle, active } = this.props

        if (tabTitle === 'Messages') {
            if (active) {
                return (
                    <div>
                        <p> {tabTitle} </p>
                    </div>
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
                    <div>
                        <p> {tabTitle} </p>
                    </div>
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
                    <div>
                        <p> {tabTitle} </p>
                    </div>
                )

            } return (
                <div>
                    <IconProfile />
                </div>
            )
        }
    }
}
