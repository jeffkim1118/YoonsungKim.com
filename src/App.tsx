import './App.css';
import Navbar from "./components/navbar"
import Introduction from './components/introduction';
import Landing from './components/landing';
import Contact from './components/contact';
import Portfolios from './components/portfolios';
import Resume from './components/resume';

function App() {
  return (
    <div>
      <Navbar />     
      <Landing />
      <Introduction />
      <Portfolios />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
