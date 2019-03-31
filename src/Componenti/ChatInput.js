import React from 'react';
import './ChatInput.css'

import { IconAttachment, IconSend } from '../Atom/Icons';

export default class ChatInput extends React.Component {
    state = {
        focus: false,
    };
    writeMessage() {
        this.setState({
            focus: true
        })
    }
    render() {
        return (
            <div className="send-message">
                <IconAttachment />
                {this.state.focus ?
                    <input type="text" onBlur={() => this.setState({ focus: false })} autoFocus />
                    :
                    <h4 onClick={() => this.writeMessage()}>Write a message</h4>}
                <IconSend />
            </div>
        )
    }
}