import React, { Component } from 'react';

export default class ChatRoom extends Component {

  constructor(props) {
    super(props);
    this.updateMessage = this.updateMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.state = {
      messages: [
        { id: 0, text: 'first message' },
        { id: 1, text: 'second message' },
        { id: 2, text: 'third message' },
      ],
    };
  }

  updateMessage(event) {
    console.log(`updateMessage ${event.target.value}`);
    this.setState({
      message: event.target.value,
    });
  }

  submitMessage() {
    const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message,
    };

    const list = Object.assign([], this.state.messages);

    list.push(nextMessage);
    this.setState({
      messages: list,
    });
  }

  render() {
    const currentMessages = this.state.messages.map(message =>
      (
        <li key={message.id}>{message.text}</li>
      ),
  );
    return (
      <div>
        <ol>
          {currentMessages}
        </ol>
        <input onChange={this.updateMessage} type="text" placeholder="Message" />
        <br />
        <button onClick={this.submitMessage}>Submit Message</button>
      </div>
    );
  }
}
