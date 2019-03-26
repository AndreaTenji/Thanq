import React from 'react'
import Message from './../Atom/Message.js'
import ProfileImage from './../Atom/ProfileImage'
import UnreadAndDate from './../Atom/UnreadAndDate'
import './SingleChat.css'

export default class SingleChat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: 'Roberta',
            Surname: 'Caresti',
            Job: 'MediaSocial Maneger',
            LastMessage: 'Hi, come stai?',
            LastMessageTime: '14:10',
            ImgProfileURL: 'image-katia123456',
            Favorite: true,
            NumbersMessage: 5,
        }
    }

    render() {
        const { favoriteBool } = this.props
        return (
            <div className='singleChatDisplay' onClick={() => this.props.actionSingleChat()}>
                <ProfileImage
                    favoriteBool={this.state.Favorite}
                    imageProfileURL={this.state.ImgProfileURL}
                />

                {favoriteBool ?
                    <Message
                        fullName={this.state.Name + ' ' + this.state.Surname}
                        jobRole={this.state.Job}
                    />
                    : <Message
                        fullName={this.state.Name + ' ' + this.state.Surname}
                        message={this.state.LastMessage}
                    />}

                <UnreadAndDate
                    numMessages={this.state.NumbersMessage}
                    time={this.state.LastMessageTime}
                />
            </div>
        )
    }
} 