import React from 'react';
import SingleChat from './../Componenti/SingleChat'


export default class Favorite extends React.Component {
    render() {
        return (
            <div>
                {this.props.messages.map((el, i) =>
                    <SingleChat
                        Name={el.Name}
                        Surname={el.Surname}
                        Job={el.Job}
                        LastMessage={el.LastMessage}
                        favoriteBool={true}
                        actionSingleChat={() => this.props.actionSingleChat('Chat')} />)}
            </div>

        )
    }
}