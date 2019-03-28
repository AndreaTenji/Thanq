import React from 'react';
import SingleChat from './../Componenti/SingleChat'

export default class Messages extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            currentChat: null,

        }
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