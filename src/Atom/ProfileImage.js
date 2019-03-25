import React from 'react'
import './ProfileImage.css'
import ImageProfile from './images/image-profile.png'
import IconFavorite from './images/icon_favorite_yellow.svg'

export default class ProfileImage extends React.Component {
    render() {

        const { preferito } = this.props

        return (

            <div className="imageProfileDisplay">

                <img
                    className="imageProfile"
                    src={ImageProfile}
                    alt="profile" />

                {preferito && <img
                    className="iconFavorite"
                    src={IconFavorite}
                    alt="profile" />}
            </div>
        )
    }
}