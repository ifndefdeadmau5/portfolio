import React, { Component } from 'react';
import firebase from 'firebase';
import styled, { keyframes } from 'styled-components';
import Input from './Input';
import Button from './Button';

const ChatContainer = styled.div`
  align-text: center;
`;

const fadeIn = keyframes`
    {
    0% {opacity: 0;}
    100% {opacity: 1;}
    }
`

const Message = styled.li`
  font-size: 1em;
  animation: ${fadeIn} 1s ease-in;
`;

const Container = styled.div`
  align-content: center;
  align-items: center;
`;

export default class ChatRoom extends Component {

  constructor(props) {
    super(props);
    this.updateMessage = this.updateMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.state = {
      messages: [],
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
      <Container>
        <ChatContainer>
          <ul>
            {this.state.messages && this.state.messages.map(message =>
              (
                <Message key={message.id}>{message.text}</Message>
              ))}
          </ul>
          <div>
            <Input
              onKeyDown={(event) => {
                if (event.keyCode === 13) {
                  this.submitMessage();
                }
              }} onChange={this.updateMessage} type="text" placeholder="Message"/>
            <Button onClick={this.submitMessage}>Send</Button>
          </div>
        </ChatContainer>
      </Container>
    );
  }
}
