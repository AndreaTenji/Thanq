import React from 'react'
import PropsTypes from 'prop-types'

import Message from './../Atom/Message.js'
import ProfileImage from './../Atom/ProfileImage'
import UnreadAndDate from './../Atom/UnreadAndDate'
import './SingleChat.css'

export default class SingleChat extends React.Component {

    render() {
        const { favoriteBool, ImgProfileURL, Surname, Name, Job, LastMessage, NumbersMessage, LastMessageTime } = this.props
        return (
            <div className='singleChatDisplay'>
                <div style={{ display: 'flex', flex: 2, justifyContent: 'center' }}>
                    <ProfileImage
                        favoriteBool={favoriteBool}
                        imageProfileURL={ImgProfileURL}
                        size='60px'
                    />
                </div>

                <div style={{ flex: 3 }}>
                    <Message
                        fullName={Name + ' ' + Surname}
                        message={(LastMessage) ? LastMessage : Job}
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <UnreadAndDate
                        numMessages={NumbersMessage}
                        time={LastMessageTime}
                    />
                </div>

            </div>
        )
    }
}

SingleChat.propsTypes = {
    favoriteBool: PropsTypes.bool,
    ImgProfileURL: PropsTypes.string,
    Surname: PropsTypes.string,
    Name: PropsTypes.string,
    Job: PropsTypes.string,
    LastMessage: PropsTypes.string,
    LastMessageTime: PropsTypes.string,
    NumbersMessage: PropsTypes.string,
}
