import React from 'react';
import { Link } from 'react-router-dom'

import { TextChatName, TextRegularWhite } from './../Atom/Texts'
import { IconTrash, IconFavoriteOutline, IconFavoriteWhite, IconBackWhite } from '../Atom/Icons';
import ProfileImage from './../Atom/ProfileImage'
import './ChatHeader.css'

export default class ChatHeader extends React.Component {

    render() {
        const { name, surname, jobRole, favorite, imageProfileURL } = this.props
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
                    <TextChatName Text={name + ' ' + surname} />
                    <TextRegularWhite Text={jobRole} />
                </div>

                <div style={{ flex: 1 }}>
                    <IconTrash />
                </div>

                <div style={{ flex: 1 }} onClick={this.props.actionFavorite}>
                    {favorite ?
                        <IconFavoriteWhite /> :
                        <IconFavoriteOutline />
                    }
                </div>


            </div >

        )
    }
}