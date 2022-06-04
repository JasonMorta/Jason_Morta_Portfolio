import './App.css';
import Navigation from './components/Navigation';
import BackgroundSVG from './components/BackgroundSVG';
import HeroImage from './components/HeroImage';
import AboutMe from './components/AboutMe';
function App() {



  return (
    <div className="App">
      <BackgroundSVG />
      
      <div className='main-container' >
        <Navigation />
        <HeroImage />
        <AboutMe />

      </div>
    </div>
  );
}

export default App;
