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
                    <SingleChat actionSingleChat={() => this.viewChat(0)} />
                    <SingleChat actionSingleChat={() => this.viewChat(1)} />
                    <SingleChat actionSingleChat={() => this.viewChat(2)} />
                    <SingleChat actionSingleChat={() => this.viewChat(3)} />
                    <SingleChat actionSingleChat={() => this.viewChat(4)} />
                    <SingleChat actionSingleChat={() => this.viewChat(5)} />
                    <SingleChat actionSingleChat={() => this.viewChat(6)} />
                </div>
                }

            </div>

        )
    }
}