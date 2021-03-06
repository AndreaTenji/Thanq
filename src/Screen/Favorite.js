import React from 'react';
import PropsTypes from 'prop-types'

import { Link } from 'react-router-dom'
import SingleChat from './../Componenti/SingleChat'


export default class Favorite extends React.Component {
    render() {
        const { messages } = this.props
        return (
            <div>
                {messages.map((el, i) =>
                    (el.favorite) ?
                        <Link to={`/chat/${el.id}`}>
                            <SingleChat
                                key={el.id}
                                Name={el.name}
                                Surname={el.surname}
                                Job={el.job}
                                LastMessage={el.messages[Object.keys(el.messages).length - 1].text}
                                LastMessageTime={el.messages[Object.keys(el.messages).length - 1].time}
                                NumbersMessage={el.messageUnread}
                                favoriteBool={el.favorite}
                                ImgProfileURL={el.profileImageURL}
                            />
                        </Link> :
                        null
                )}
            </div>
        )
    }
}

Favorite.propsTypes = {
    messages: PropsTypes.object,
}