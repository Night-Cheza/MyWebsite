import NavBar from './components/LoadPage/NavBar';
import Greeting from './components/LoadPage/Greeting';
import './App.css';
import React from 'react';

function App() {
  return (
    <div>
      <header className="appHeader">
        <NavBar />
        <Greeting />
      </header>
    </div>
  );
}

export default App;
