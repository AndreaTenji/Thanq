import React from 'react';
import SingleChat from './../Componenti/SingleChat'

export default class Messages extends React.Component {


    constructor(props) {
        super(props)
        this.viewChat = this.viewChat.bind(this)
        this.state = {
            currentChat: null,
            messages: [
                {
                    Name: "Nara",
                    Surname: "Stabo",
                    Job: "Sales",
                    LastMessage: "Ahooooo"
                },
                {
                    Name: "Abdula",
                    Surname: "Iuguraia",
                    Job: "Sales",
                    LastMessage: "Ce credi?"
                },
                {
                    Name: "Mozzo",
                    Surname: "Zozzo",
                    Job: "Sales",
                    LastMessage: "No vabbeeeee"
                },
                {
                    Name: "Peter",
                    Surname: "Petrelli",
                    Job: "Sales",
                    LastMessage: "Oh hai visto quella? Je 'scivano le bolle de sapone daa recchie"
                },
                {
                    Name: "Alfonso",
                    Surname: "Pedretti",
                    Job: "Sales",
                    LastMessage: "Veramente me chiamo Arfonzo"
                },
            ]

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
                    {this.state.messages.map((el, i) =>
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