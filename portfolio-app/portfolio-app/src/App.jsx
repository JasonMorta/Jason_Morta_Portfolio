import './App.css';
import Navigation from './components/Navigation';
import BackgroundSVG from './components/BackgroundSVG';
import HeroImage from './components/HeroImage';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Contact from './components/Contact';
function App() {



  return (
    <div className="App">
      <BackgroundSVG />
      
      <div className='main-container' >
        <Navigation />
        <HeroImage />
        <AboutMe />
        <Education />
        <Contact />

      </div>
    </div>
  );
}

export default App;
