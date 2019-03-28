import React from 'react';
import SingleChat from './../Componenti/SingleChat'

export default class Messages extends React.Component {


    constructor(props) {
        super(props)
        this.viewChat = this.viewChat.bind(this)
        this.state = {
            currentChat: null,


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
                    {this.props.messages.map((el, i) =>
                        <SingleChat
                            Name={el.Name}
                            Surname={el.Surname}
                            Job={el.Job}
                            LastMessage={el.LastMessage}
                            favoriteBool={false}
                            actionSingleChat={() => this.props.actionSingleChat('Chat')} />)}
                </div>


            </div>

        )
    }
}