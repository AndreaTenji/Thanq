import React from 'react'
import './SingleChat.css'
export default class SingleChat extends React.Component {

    render() {
        return (
            <div className='singleChatDisplay'>
                <div> Foto profilo </div>
                <div> Stella dei preferiti </div>
                <div> Nome Persona </div>
                <div> Ultimo messaggio </div>
                <div> Ora dell'ultimo Messaggio </div>
                <div> Numero dei messaggi </div>
            </div>
        )
    }
} 