import React from 'react'
import './ProfileImage.css'
import { IconFavoriteYellow } from './../Atom/Icons'

export default class ProfileImage extends React.Component {
    render() {

        const { favoriteBool, imageProfileURL, size } = this.props

        return (

            <div style={{ width: size, }} className="imageProfileDisplay">

                <img
                    className="imageProfile"
                    src={require(`./../Assets/images/${imageProfileURL}.png`)}
                    alt="profile" />

                {favoriteBool &&
                    <div className="iconFavorite">
                        <IconFavoriteYellow size={size} />
                    </div>}
            </div>
        )
    }
}