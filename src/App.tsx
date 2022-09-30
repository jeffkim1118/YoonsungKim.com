import React from 'react';
import './App.css';
import Navbar from "./components/navbar"
import Introduction from './components/introduction';
import Landing from './components/landing';
import Contact from './components/contact';

function App() {
  return (
    <div>
      <Navbar/>     
      <Landing />
      <Introduction/>
      <Contact/>
    </div>
  );
}

export default App;
