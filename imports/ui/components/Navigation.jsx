import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background: transparent;
`;

const Menu = styled.a`
  font-size: 1.5em;
  flex: 1;
  text-align: center;
`

const Navigation = () =>
  <Nav>
    <Menu>Home</Menu>
    <Menu>About</Menu>
    <Menu>Hello World</Menu>
    <Menu href="#contacts">Contact me</Menu>
  </Nav>

export default Navigation;
