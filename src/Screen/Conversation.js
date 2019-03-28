import React from 'react';
import ChatInput from '../Componenti/ChatInput';
import ChatBubble from '../Componenti/ChatBubble';

const image = '/Users/shiningstar/Documents/GitHub/Thanq/src/Atom/images/image-katia123456.png';

export default class Conversation extends React.Component {

  state = {
    messages: [
      {
        type: 0,
        image,
        text: "Hello! Good Morning!"
      },
      {
        type: 1,
        image,
        text: "Hello! Good Afternoon!"
      },
      {
        type: 1,
        image,
        text: "How are you?"
      },
      {
        type: 1,
        image,
        text: "All good innit"
      }
    ],
  };

  handleNewMessage = text =>
    this.setState({
      messages: this.state.messages.concat([{
        text,
        type: 0,
        image,
      }])
    });

  render() {
    return (
      <div>
        <ChatBubble
          messages={this.state.messages}
          onNewMessage={this.handleNewMessage} />
      </div>
    );
  }
}

