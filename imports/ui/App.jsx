import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import Navigation from './components/Navigation';
import Chatroom from './components/Chat/ChatRoom';

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
  background: rgba(195,47,52,0.8);
   -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const Title = styled.h1`
  font-size: 4em;
  margin: 0px;
  text-align: center;
`;

const SubTitle = styled(Title)`
  font-size: 2em;
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
          <Title>Sungmin Park</Title>
          <SubTitle>Software Engineer</SubTitle>
        </Wrapper>
      </PageWithBackground>
      <Page>
        <Wrapper>
          <embed src="resume.pdf" width="100%" height="100%" type="application/pdf" />
        </Wrapper>
      </Page>
      <Page id="contacts">
        <Wrapper>
          <Chatroom />
        </Wrapper>
      </Page>
    </Container>
  );
}
