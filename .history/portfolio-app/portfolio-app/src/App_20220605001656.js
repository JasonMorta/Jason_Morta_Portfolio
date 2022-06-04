import './App.css';
import Navigation from './components/Navigation';
import BackgroundSVG from './components/BackgroundSVG';

function App() {



  return (
    <div className="App">
      <BackgroundSVG />
      
      <div className='main-container' >
      <Navigation />
      </div>
    </div>
  );
}

export default App;
