import React from 'react';
import './App.css';
import Navbar from "./components/navbar"
import Introduction from './components/introduction';
import Landing from './components/landing';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Resume from './components/resume';

function App() {
  return (
    <div>
      <Navbar />     
      <Landing />
      <Introduction />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
