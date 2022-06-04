import './App.css';
import Navigation from './components/Navigation';
import BackgroundSVG from './components/BackgroundSVG';
import HeroImage from './components/HeroImage';
function App() {



  return (
    <div className="App">
      <BackgroundSVG />
      
      <div className='main-container' >
        <Navigation />
        <HeroImage />

      </div>
    </div>
  );
}

export default App;
