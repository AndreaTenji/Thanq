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
            <div className='singleChatDisplay'>
                <div style={{ display: 'flex', flex: 2, justifyContent: 'center' }}>
                    <ProfileImage
                        favoriteBool={this.props.favoriteBool}
                        imageProfileURL={this.state.ImgProfileURL}
                        size='60px'
                    />
                </div>

                <div style={{ flex: 3 }}>
                    {favoriteBool ?
                        <Message
                            fullName={this.props.Name + ' ' + this.props.Surname}
                            jobRole={this.props.Job}
                        />
                        : <Message
                            fullName={this.props.Name + ' ' + this.props.Surname}
                            message={this.props.LastMessage}
                        />}
                </div>
                <div style={{ flex: 1 }}>
                    <UnreadAndDate
                        numMessages={this.state.NumbersMessage}
                        time={this.state.LastMessageTime}
                    />
                </div>

            </div>
        )
    }
} 