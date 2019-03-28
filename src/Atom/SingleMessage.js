import React from 'react';

import './SingleMessage.css'
export default class SingleMessage extends React.Component {

    render() {
        const { messaggio, orario, type } = this.props

        return (
            <div class="single-message">
                <div class="time">
                    <p>{orario}</p>
                </div>
                {type ?
                    <div class="bubble-text sent">
                        <h4>{messaggio}</h4>
                    </div> :
                    <div class="bubble-text received">
                        <h4>{messaggio}</h4>
                    </div>
                }
            </div>


        )
    }
}
