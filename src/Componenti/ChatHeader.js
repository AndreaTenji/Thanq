import React from 'react';
import { TextChatName, TextRegularWhite } from './../Atom/Texts'
import IconNext from './../Assets/icons/icon_back.svg'
import IconTrash from './../Assets/icons/icon_trash.svg'
import IconFavoriteON from './../Assets/icons/icon_favorite_white.svg'
import IconFavoriteOFF from './../Assets/icons/icon_favorite_outline.svg'
import ProfileImage from './../Atom/ProfileImage'
import './ChatHeader.css'

export default class ChatHeader extends React.Component {

    render() {
        const { name, surname, jobRole, favorite, imageProfileURL } = this.props
        return (
            <div className='chatHeader'>
                <div
                    style={{ flex: 1 }}
                    onClick={() => this.props.actionBack('Messages')}>
                    <img src={IconNext} alt="Back" />
                </div>

                <div style={{ flex: 1 }}>
                    <ProfileImage
                        imageProfileURL={imageProfileURL}
                        size='50px'
                    />
                </div>

                <div style={{ flex: 3, textAlign: 'center' }}>
                    <TextChatName Text={name + ' ' + surname} />
                    <TextRegularWhite Text={jobRole} />
                </div>

                <div style={{ flex: 1 }}>
                    <img src={IconTrash} alt="Back" />
                </div>

                <div style={{ flex: 1 }} onClick={this.props.actionFavorite}>
                    {favorite ?
                        <img
                            src={IconFavoriteON}
                            alt="Back"
                        /> :
                        <img
                            src={IconFavoriteOFF}
                            alt="Back"
                        />
                    }
                </div>


            </div >

        )
    }
}