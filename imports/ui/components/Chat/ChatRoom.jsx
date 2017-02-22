import React, { Component } from 'react';
import firebase from 'firebase';
import styled from 'styled-components';
import Input from './Input';
import ChatList from './ChatList';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ChatContainer = styled.div`
  flex: 5;
  overflow: scroll;
  background: white;
`;

const InputWrapper = styled.div`
  display: flex;
  height: 50px;
  align-content: stretch;
`

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
          <ChatList messages={this.state.messages} />
        </ChatContainer>
        <InputWrapper>
          <Input
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                this.submitMessage();
                event.target.value = '';
              }
            }}
            onChange={this.updateMessage}
            type="text"
            placeholder="Message"
          />
        </InputWrapper>
      </Container>
    );
  }
}
