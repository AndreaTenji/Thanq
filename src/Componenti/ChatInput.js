import React from 'react';
import './ChatInput.css'
import PropsTypes from 'prop-types'


import { IconAttachment, IconSend } from '../Atom/Icons';


export default class ChatInput extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            focus: false,
            valueText: '',
        };
    }

    writeMessage() {
        this.setState({
            focus: true
        })
    }
    handleChange(event) {
        this.setState({
            valueText: event.target.value
        })
    }

    render() {
        const { idPersonal, renderState } = this.props

        return (
            <div className="send-message">
                <IconAttachment />
                {this.state.focus ?
                    <input
                        type="text"
                        value={this.state.valueText}
                        name='textMessage'
                        onBlur={() => this.setState({ focus: false })}
                        onChange={(event) => this.handleChange(event)}
                        autoFocus />
                    :
                    <h4 onClick={() => this.writeMessage()}>Write a message</h4>}

                <div onClick={() => {
                    this.props.data.messages.push({
                        sender: idPersonal,
                        text: this.state.valueText,
                    });
                    this.setState({ valueText: '' })
                    renderState()
                }}
                >
                    <IconSend />
                </div>

            </div >
        )
    }
}

ChatInput.propsTypes = {
    idPersonal: PropsTypes.string,
    valueText: PropsTypes.string,
    renderState: PropsTypes.func,
}