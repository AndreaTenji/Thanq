import React from 'react';
import { Link } from 'react-router-dom'
import SingleChat from './../Componenti/SingleChat'

export default class Messages extends React.Component {


    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (


            <div>

                {this.props.messages.map((el, i) =>
                    <Link to={`/chat/${el.id}`}>
                        <SingleChat
                            key={i}
                            Name={el.name}
                            Surname={el.surname}
                            Job={el.job}
                            LastMessage={el.lastMessage.text}
                            LastMessageTime={el.lastMessage.date}
                            NumbersMessage={el.messageUnread}
                            favoriteBool={el.favorite}
                        />
                    </Link>)
                }
            </div>




        )
    }
}