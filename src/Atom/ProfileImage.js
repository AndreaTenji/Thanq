import React from 'react'
import './ProfileImage.css'
import IconFavorite from './images/icon_favorite_yellow.svg'

export default class ProfileImage extends React.Component {
    render() {

        const { favoriteBool, imageProfileURL, size } = this.props

        return (

            <div style={{ width: size, }} className="imageProfileDisplay">

                <img
                    className="imageProfile"
                    src={require(`./images/${imageProfileURL}.png`)}
                    alt="profile" />

                {favoriteBool && <img
                    className="iconFavorite"
                    src={IconFavorite}
                    alt="favorite:ON" />}
            </div>
        )
    }
}