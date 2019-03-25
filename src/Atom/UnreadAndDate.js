import React from 'react'
import './UnreadAndDate.css'

export default class UnreadAndDate extends React.Component {
    render() {
        const { numMessages, time } = this.props
        return (

            <div className="unreadAndDateDisplay">
                <div className="unread">
                    {numMessages}
                </div>
                <div className="date">
                    {time}
                </div>

            </div>
        )
    }
}