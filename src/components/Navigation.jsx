import React from 'react'
import { useNavigate } from "react-router-dom";
import ReactGA from 'react-ga'

export default function Navigation() {

   let navigate = useNavigate();
   
   //Tell google analytics what button was clicked
   function events(cat,act){
         ReactGA.event({
               category: cat,
               action: act
         })
   }

  

  return (
   <nav className="nav" id="top-nav">
      <div className="nav-container">
         <a className="active" href="#main" onClick={()=>{
            navigate("./")
            events("nav button", "clicked on main link")
            } }>
            <h4>MAIN</h4>
         </a>
         <a className="active" href="#work" onClick={() => navigate("./")}>
            <h4  >MY WORK</h4>
         </a>
         <a href="#about" onClick={() => navigate("./")}>
            <h4>ABOUT ME</h4>
         </a>
         <a href="#contact" onClick={() => navigate("./")}>
            <h4>CONTACT</h4>
         </a>
         
         <a onClick={() => navigate("/blogposts")} >
            <h4 >BLOGS</h4>
         </a>
         
      </div>
   </nav>
  )
}
