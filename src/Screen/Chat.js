import React from 'react';

export default class Chat extends React.Component {

    render() {
        const { chatID } = this.props
        return (
            <div>
                QUESTA è LA CHAT DI {chatID}
            </div>

        )
    }
}