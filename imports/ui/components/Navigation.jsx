import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #272727;
`;

const Menu = styled.a`
  font-size: 1em;
  color: #737373;
  text-align: center;
  text-decoration: none;
  margin: 0.5em;
  margin-left: 1em;
  margin-right: 1em;
  
  &:visited, &:active {
    color: #737373;
  }
  &:hover {
    color: white;
  }
`

const Navigation = () =>
  <Nav>
    <Menu>Home</Menu>
    <Menu>About</Menu>
    <Menu>Resume</Menu>
    <Menu href="#contacts">Chat</Menu>
  </Nav>

export default Navigation;
