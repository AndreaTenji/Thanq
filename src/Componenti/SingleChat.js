import React from 'react'
import Messaggio from './../Atom/Messaggio.js'
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
        return (
            <div className='singleChatDisplay'>
                <ProfileImage favoriteBool={this.state.Favorite} imageProfileURL={this.state.ImgProfileURL} />
                <Messaggio UtenteNick="Nome" UtenteMessage="Messagio" />
                <UnreadAndDate numMessages={this.state.NumbersMessage} time={this.state.LastMessageTime} />
            </div>
        )
    }
} 