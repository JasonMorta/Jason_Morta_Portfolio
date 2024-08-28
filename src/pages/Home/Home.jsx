import React from 'react'

import AboutMe from '../../components/sections/about/AboutMe'
import Contact from '../../components/sections/contact/Contact'
import Education from '../../components/sections/education/Education'
import HeroImage from '../../components/sections/hero-image/HeroImage'
import MyWork from '../../components/sections/my-work/MyWork'
import SkillIcons from '../../components/sections/skills-stack-slider/SkillIcons'

export default function Home() {
  return (
     
       <div className="App custom-cursor">
              <HeroImage />
              <SkillIcons />
              <MyWork />
              <Contact />
              <Education />
              <AboutMe />
              
     </div>
  )
}
