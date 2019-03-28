import React from 'react';
import SingleChat from './../Componenti/SingleChat'


export default class Favorite extends React.Component {
    render() {
        return (
            <div>
                <SingleChat favoriteBool={true} actionSingleChat={() => this.props.actionSingleChat('Chat')} />
                <SingleChat favoriteBool={true} actionSingleChat={() => this.props.actionSingleChat('Chat')} />
                <SingleChat favoriteBool={true} actionSingleChat={() => this.props.actionSingleChat('Chat')} />
                <SingleChat favoriteBool={true} actionSingleChat={() => this.props.actionSingleChat('Chat')} />
                <SingleChat favoriteBool={true} actionSingleChat={() => this.props.actionSingleChat('Chat')} />
                <SingleChat favoriteBool={true} actionSingleChat={() => this.props.actionSingleChat('Chat')} />
                <SingleChat favoriteBool={true} actionSingleChat={() => this.props.actionSingleChat('Chat')} />
                <SingleChat favoriteBool={true} actionSingleChat={() => this.props.actionSingleChat('Chat')} />
            </div>

        )
    }
}