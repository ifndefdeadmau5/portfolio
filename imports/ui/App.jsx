import React from 'react';
import script from '../scripts/main';
import ChatRoom from '../Component/ChatRoom';

const style = {
  backgroundColor: 'white',
  margin: 100,
}

// App component - represents the whole app
export default function App() {
  return (
    <div className="container" style={style}>
      <header>
        <h1>Me me me</h1>
      </header>

      <ul>
        <li>Trevor</li>
        <li>27</li>
        <li>Male</li>
        <li>Software Engineer</li>
      </ul>

      <ChatRoom></ChatRoom>
    </div>
  );
}
