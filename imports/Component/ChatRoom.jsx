import React, { Component } from 'react';
import firebase from 'firebase';

export default class ChatRoom extends Component {

  constructor(props) {
    super(props);
    this.updateMessage = this.updateMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.state = {
      messages: null,
    };

    const config = {
      apiKey: 'AIzaSyB4pOsn6qm1fdgkwaQEel1KDkZrlh_J_MY',
      authDomain: 'trevorme-5b2c4.firebaseapp.com',
      databaseURL: 'https://trevorme-5b2c4.firebaseio.com',
      storageBucket: 'trevorme-5b2c4.appspot.com',
      messagingSenderId: '759398557086',
    };

    firebase.initializeApp(config);
  }

  componentDidMount() {
    firebase.database().ref('messages/').on('value', (snapshot) => {
      const currentMessages = snapshot.val();
      const list = Object.assign([], currentMessages);

      if (currentMessages != null) {
        this.setState({
          messages: list,
        });
      }
    });
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value,
    });
  }

  submitMessage() {
    const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message,
    };

    firebase.database().ref(`messages/${nextMessage.id}`).set(nextMessage);
  }

  render() {
    return (
      <div>
        <ol>
          {this.state.messages && this.state.messages.map(message =>
            (
              <li key={message.id}>{message.text}</li>
            ))}
        </ol>
        <input onChange={this.updateMessage} type="text" placeholder="Message" />
        <br />
        <button onClick={this.submitMessage}>Submit Message</button>
      </div>
    );
  }
}
