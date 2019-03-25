import React from 'react'
import Messaggio from './../Atom/Messaggio.js'
export default class SingleChat extends React.Component {
    render() {
        return (
            <div>
                <Messaggio UtenteNick="Nome" UtenteMessage="Messagio"/>
            </div>
        )
    }
} 