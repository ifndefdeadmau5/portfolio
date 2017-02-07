import React from 'react';
import styled, { keyframes } from 'styled-components';
import ChatRoom from './component/ChatRoom';
import Button from './component/Button';

const Container = styled.div`
  flex: 1;
  flex-direction: row;
`;

const Title = styled.h1`
  font-size: 3em;
  color: palevioletred;
  margin: 0px;
`;

const SubTitle = styled.h2`
  font-size: 1em;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  flex: 1;
  background: papayawhip;
`;

const rotate360 = keyframes`
  from {
   transform: rotate(0deg);
   }
   
   to {
   transform: rotate(360deg);
   }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite
`;

// App component - represents the whole app
export default function App() {
  return (
    <Container>
      <header>
        <Wrapper>
          <Rotate>
            Rotate
          </Rotate>
          <Title>Hi, I'm Trevor</Title>
          <SubTitle>This is my portfolio website</SubTitle>
          <Button primary>Subscribe</Button>
        </Wrapper>
      </header>

      <ul>
        <li>Trevor</li>
        <li>27</li>
        <li>Male</li>
        <li>Software Engineer</li>
      </ul>
      <ChatRoom />
    </Container>
  );
}
