import React from 'react';
import './ChatInput.css'
import Messaggi from './../Assets/icons/icon_attachment.svg';
import Send from './../Assets/icons/icon_send.svg';

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
            <div class="send-message">
                <img
                    src={Messaggi}
                    alt='send'
                />
                {this.state.focus ?
                    <input type="text" onBlur={() => this.setState({ focus: false })} autoFocus />
                    :
                    <h4 onClick={() => this.writeMessage()}>Write a message</h4>}
                <img src={Send}
                    alt='send' />
            </div>
        )
    }
}