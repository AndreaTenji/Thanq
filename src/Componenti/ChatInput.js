import React from 'react';
import './ChatInput.css'

import { IconAttachment, IconSend } from '../Atom/Icons';


export default class ChatInput extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            focus: false,
            valueText: '',
        };
        this.handleChange = this.handleChange.bind(this)
    }

    writeMessage() {
        this.setState({
            focus: true
        })
    }
    handleChange(event) {
        this.setState({ valueText: event.target.value })
    }

    render() {
        return (
            <div className="send-message">
                <IconAttachment />
                {this.state.focus ?
                    <input
                        type="text"
                        value={this.state.valueText}
                        name='textMessage'
                        onBlur={() => this.setState({ focus: false })}
                        onChange={this.handleChange}
                        autoFocus />
                    :
                    <h4 onClick={() => this.writeMessage()}>Write a message</h4>}

                <div onClick={() => {
                    this.props.data.messages.push({
                        sender: this.props.idPersonal,
                        text: this.state.valueText,
                    });
                    this.setState({ valueText: '' })
                    this.props.renderState()
                }}
                >
                    <IconSend />
                </div>

            </div >
        )
    }
}