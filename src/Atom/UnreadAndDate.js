import React from 'react'
import PropsTypes from 'prop-types'
import './UnreadAndDate.css'

export default class UnreadAndDate extends React.Component {
    render() {
        const { numMessages, time } = this.props
        return (

            <div className="unreadAndDateDisplay">
                {/*operatore ternario per controllare se le notifiche sono vuote*/}
                {numMessages === 0 ?
                    <div></div>
                    :
                    <div className="unread">{numMessages}
                    </div>
                }
                <div className="date">
                    {time}
                </div>

            </div>
        )
    }
}

UnreadAndDate.propsTypes = {
    numMessages: PropsTypes.string,
    time: PropsTypes.func,
}