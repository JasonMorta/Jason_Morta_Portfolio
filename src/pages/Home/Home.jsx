import React from 'react'
import BackgroundSVG from '../../components/BackgroundSVG'
import AboutMe from '../../components/sections/about/AboutMe'
import Contact from '../../components/sections/contact/Contact'
import Education from '../../components/sections/education/Education'
import HeroImage from '../../components/sections/hero-image/HeroImage'
import MyWork from '../../components/sections/my-work/MyWork'

export default function Home() {
  return (
    
       <div className="App custom-cursor">
          <BackgroundSVG />
  
          <div className="main-container">
              <HeroImage />
              <AboutMe />
              <Education />
              <MyWork />
              <Contact />
          </div>
        </div>
    
  )
}
