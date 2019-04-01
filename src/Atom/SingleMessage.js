import React from 'react';

import './SingleMessage.css'
export default class SingleMessage extends React.Component {

    render() {
        const { messaggio, orario, type } = this.props

        return (
            <div className="single-message">
                <div className="time">
                    <p>{orario}</p>
                </div>
                {type ?
                    <div className="bubble-text sent">
                        <h4>{messaggio}</h4>
                    </div> :
                    <div className="bubble-text received">
                        <h4>{messaggio}</h4>
                    </div>
                }
            </div>


        )
    }
}
