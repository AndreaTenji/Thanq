import React from 'react';
import './Message.css'
export default class Message extends React.Component {

    render() {
        const { fullName, message, jobRole } = this.props
        return (
            <div className="message">
                <h2>{fullName}</h2>
                {jobRole ? <h3>{jobRole}</h3> : <h3>{message}</h3>}
            </div>
        )
    }
}

