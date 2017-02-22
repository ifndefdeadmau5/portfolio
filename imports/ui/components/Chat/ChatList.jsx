import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style-type: none;
`

const UserIconImage = styled.img`
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 16px;
`


const Message = styled.li`
  display: inline-block;
  height: 20px;
  padding: 4px;
  
  background-color: #44acff;
  border-radius: 25px;
  font-size: 1em;
  color: white;
  margin: 4px;
`;

const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
`


const ChatList = props => (
  <Ul>
    {props.messages && props.messages.map(message =>
      (
        <MessageWrapper>
          <UserIconImage src="./icon_default_user.svg" alt="default user icon" />
          <Message key={message.id}>{message.text}</Message>
          <br />
        </MessageWrapper>
      ))}
  </Ul>
);

ChatList.propTypes = { messages: React.PropTypes.Array };
ChatList.defaultProps = { messages: [] };

export default ChatList;
