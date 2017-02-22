import React from 'react';
import styled, { keyframes, injectGlobal } from 'styled-components';
import Navigation from './components/Navigation';
import Chatroom from './components/ChatRoom';

injectGlobal`
    body {
        margin: 0;
        padding : 0;
    }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  overflow-y: scroll;
`;

const Page = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const PageWithBackground = styled(Page)`
  background: url('./bg.jpg') no-repeat center center;
   -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

const Title = styled.h1`
  font-size: 3em;
  margin: 0px;
  text-align: center;
`;

const SubTitle = styled(Title)`
  font-size: 1em;
`;

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// App components - represents the whole app
export default function App() {
  return (
    <Container>
      <PageWithBackground>
        <Navigation />
        <Wrapper>
          <Title>Hi, I'm Trevor</Title>
          <SubTitle>This is my portfolio website</SubTitle>
        </Wrapper>
      </PageWithBackground>
      <Page id="contacts">
        <Wrapper>
          <Chatroom />
        </Wrapper>
      </Page>
    </Container>
  );
}
