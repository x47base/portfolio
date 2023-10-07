import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { IoLogoNodejs, IoLogoPython } from 'react-icons/io';
import logo from './logo.svg';
import './App.css';

import Footer from './components/footer';
import Navbar from './components/navbar';
import Main from './components/main';
import MiniCV from './components/miniCV';
import Icon from './components/Icon';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="flex flex-wrap bg-brand h-max justify-center items-center min-h-[93.5vh] gap-4">
        <MiniCV />
      </div>
    </div>
  );
}
/*

      <Main />
      <Footer />
*/

export default App;
