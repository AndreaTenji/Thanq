import React from 'react';
import { Link } from 'react-router-dom'
import PropsTypes from 'prop-types'

import { TextChatName, TextRegularWhite } from './../Atom/Texts'
import { IconTrash, IconFavoriteOutline, IconFavoriteWhite, IconBackWhite } from '../Atom/Icons';
import ProfileImage from './../Atom/ProfileImage'
import './ChatHeader.css'

export default class ChatHeader extends React.Component {

    render() {
        const { name, surname, jobRole, favorite, imageProfileURL, actionFavorite, actionDelateChat } = this.props
        return (
            <div className='chatHeader'>
                <Link to='/messages/' style={{ flex: 1 }}>
                    <IconBackWhite />
                </Link>

                <div style={{ flex: 1 }}>
                    <ProfileImage
                        imageProfileURL={imageProfileURL}
                        size='50px'
                    />
                </div>

                <div style={{ flex: 3, textAlign: 'center' }}>
                    <TextChatName Text={surname + ' ' + name} />
                    <TextRegularWhite Text={jobRole} />
                </div>

                <div style={{ flex: 1 }} onClick={actionDelateChat}>
                    <IconTrash />
                </div>

                <div style={{ flex: 1 }} onClick={actionFavorite}>
                    {favorite ?
                        <IconFavoriteWhite /> :
                        <IconFavoriteOutline />
                    }
                </div>


            </div >

        )
    }
}

ChatHeader.propsTypes = {
    name: PropsTypes.string,
    surname: PropsTypes.string,
    jobRole: PropsTypes.string,
    favorite: PropsTypes.string,
    imageProfileURL: PropsTypes.string,
    actionDelateChat: PropsTypes.func,
    actionFavorite: PropsTypes.func,
}