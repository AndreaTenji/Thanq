import React from 'react'
import Messaggio from './../Atom/Messaggio.js'
import './SingleChat.css'
import ProfileImage from './../Atom/ProfileImage'
export default class SingleChat extends React.Component {
    render() {
        return (
            <div>
                <Messaggio UtenteNick="Nome" UtenteMessage="Messagio"/>
            <div className='singleChatDisplay'>
                <ProfileImage preferito={true} />

            </div>
        )
    }
} 