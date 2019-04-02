import React from 'react';
import PropsTypes from 'prop-types'

import './Message.css'
export default class Message extends React.Component {

    render() {
        const { fullName, message, jobRole } = this.props
        return (
            <div className="message">
                <h2 className='truncate'>{fullName}</h2>
                {jobRole ? <h3 className='truncate'>{jobRole}</h3> : <h3 className='truncate'>{message}</h3>}
            </div>
        )
    }
}


Message.propsTypes = {
    fullName: PropsTypes.string,
    message: PropsTypes.string,
    jobRole: PropsTypes.string,
}
