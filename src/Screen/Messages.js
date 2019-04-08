import React from 'react';
import PropsTypes from 'prop-types'

import { Link } from 'react-router-dom'
import SingleChat from './../Componenti/SingleChat'

export default class Messages extends React.Component {

    render() {
        const { chatList, messages } = this.props

        return (
            <div>

                {chatList.participants.map((el) =>
                    <div>
                        {el}
                    </div>)
                }

                {messages.map((el, i) =>
                    <Link key={el.id} to={`/chat/${el.id}`}>
                        <SingleChat
                            Name={el.name}
                            Surname={el.surname}
                            Job={el.job}
                            LastMessage={el.messages[Object.keys(el.messages).length - 1].text}
                            LastMessageTime={el.messages[Object.keys(el.messages).length - 1].time}
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