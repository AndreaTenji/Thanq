import React from 'react';
import './Message.css'
export default class Message extends React.Component {

    render() {
        const { fullName, message } = this.props
        return (
            <div className="message">
                <h2>{fullName}</h2>
                <h3>{message}</h3>
            </div>
        )
    }
}

