import React from 'react';
import './App.css';
import Navbar from "./components/navbar"
import Introduction from './components/introduction';
import Landing from './components/landing';

function App() {
  return (
    <div>
      <Navbar/>     
      <Landing />
      <Introduction/>
    </div>
  );
}

export default App;
