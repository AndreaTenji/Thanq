import React from 'react';
import PropsTypes from 'prop-types'

import { Link } from 'react-router-dom'
import SingleChat from './../Componenti/SingleChat'

export default class Messages extends React.Component {

    render() {
        const { messages } = this.props

        return (

            <div>
                {messages.map((el, i) =>
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
                            ImgProfileURL={el.profileImageURL}
                        />
                    </Link>)
                }
            </div>
        )
    }
}
Messages.propsTypes = {
    messages: PropsTypes.object,
}