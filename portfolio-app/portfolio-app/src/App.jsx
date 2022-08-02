import "./App.css";
import Navigation from "./components/Navigation";
import BackgroundSVG from "./components/BackgroundSVG";
import HeroImage from "./components/HeroImage";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Contact from "./components/Contact";
import MyWorks from "./components/MyWork";
import './cursor.scss'
import { React, createContext, useState } from "react";

export const sharedState = createContext();


export default function App() {

  const [name, setName] = useState('Jason');
  const [animationCSS, setAnimationCSS] = useState('bounce-in-top')
  
  ;
  return (
   
       <sharedState.Provider value={[name, setName, animationCSS, setAnimationCSS]}>
          <div className="App custom-cursor">
          <BackgroundSVG />
  
          <div className="main-container">
            <Navigation />
            <HeroImage />
            <AboutMe />
            <Education />
            <MyWorks />
            <Contact />
          </div>
        </div>
       </sharedState.Provider>
    
  )
}

 