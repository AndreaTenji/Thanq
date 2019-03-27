import React from 'react';
import { TextRegularGrey, TextSettings } from './../Atom/Texts'
import IconNext from './../Componenti/images/icon_next.svg'
import Input from './../Atom/Input'
import ChatHeader from './../Componenti/ChatHeader'
import MessagesChat from './../Componenti/Chat'



export default class Chat extends React.Component {

    render() {

        return (
            <div>
                <ChatHeader />
                <MessagesChat />
                <div> input </div>
            </div >

        )
    }
}