import React from 'react';
import { Link } from 'react-router-dom'
import SingleChat from './../Componenti/SingleChat'


export default class Favorite extends React.Component {
    render() {
        return (
            <div>
                {this.props.messages.map((el, i) =>
                    <Link to={`/chat/${el.Name}`}>
                        <SingleChat
                            Name={el.Name}
                            Surname={el.Surname}
                            Job={el.Job}
                            LastMessage={el.LastMessage}
                            favoriteBool={true}
                            actionSingleChat={() => this.props.actionSingleChat('Chat')} />
                    </Link>
                )}
            </div>

        )
    }
}