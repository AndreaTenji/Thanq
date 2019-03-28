import React from 'react';
import SingleChat from './../Componenti/SingleChat'


export default class Messages extends React.Component {


    constructor(props) {
        super(props)
        this.viewChat = this.viewChat.bind(this)
        this.state = {
            currentChat: null
        }
    }
    viewChat(n) {
        this.setState({
            currentChat: 'Chat' + n
        })
    }

    render() {
        return (
            <div>

                <div>
                    <SingleChat favoriteBool={false} actionSingleChat={() => this.props.actionSingleChat('Chat')} />
                    <SingleChat favoriteBool={false} actionSingleChat={() => this.props.actionSingleChat('Chat')} />
                    <SingleChat favoriteBool={false} actionSingleChat={() => this.props.actionSingleChat('Chat')} />
                    <SingleChat favoriteBool={false} actionSingleChat={() => this.props.actionSingleChat('Chat')} />
                    <SingleChat favoriteBool={false} actionSingleChat={() => this.props.actionSingleChat('Chat')} />
                    <SingleChat favoriteBool={false} actionSingleChat={() => this.props.actionSingleChat('Chat')} />
                    <SingleChat favoriteBool={false} actionSingleChat={() => this.props.actionSingleChat('Chat')} />
                    <SingleChat favoriteBool={false} actionSingleChat={() => this.props.actionSingleChat('Chat')} />
                    <SingleChat favoriteBool={false} actionSingleChat={() => this.props.actionSingleChat('Chat')} />
                    <SingleChat favoriteBool={false} actionSingleChat={() => this.props.actionSingleChat('Chat')} />
                    <SingleChat favoriteBool={false} actionSingleChat={() => this.props.actionSingleChat('Chat')} />
                    <SingleChat favoriteBool={false} actionSingleChat={() => this.props.actionSingleChat('Chat')} />

                </div>


            </div>

        )
    }
}