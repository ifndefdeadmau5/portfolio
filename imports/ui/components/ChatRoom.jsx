import React, { Component } from 'react';
import firebase from 'firebase';
import styled, { keyframes } from 'styled-components';
import Input from './Input';
import Button from './Button';


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

const Message = styled.li`
  display: inline-block;
  height: 20px;
  padding: 4px;
  list-style-type: none;
  background-color: #44acff;
  border-radius: 25px;
  font-size: 1em;
  color: white;
  margin: 4px;
`;


const InputWrapper = styled.div`
  display: flex;
  flex: 1;
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
          <ul>
            {this.state.messages && this.state.messages.map(message =>
              (
                <div>
                  <Message key={message.id}>{message.text}</Message>
                  <br />
                </div>
              ))}
          </ul>
        </ChatContainer>
        <InputWrapper>
          <Input
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                this.submitMessage();
              }
            }} onChange={this.updateMessage} type="text" placeholder="Message"
          />
        </InputWrapper>
      </Container>
    );
  }
}
