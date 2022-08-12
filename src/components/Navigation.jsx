import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Navigation() {

   let navigate = useNavigate();
   

  return (
   <nav className="nav" id="top-nav">
      <div className="nav-container">
         <a className="active" href="#" onClick={() => navigate("./")}>
            <h4>MAIN</h4>
         </a>
         <a className="active" href="#section-3" onClick={() => navigate("./")}>
            <h4  >MY WORK</h4>
         </a>
         <a href="#section-2" onClick={() => navigate("./")}>
            <h4>ABOUT ME</h4>
         </a>
         <a href="#section-4" onClick={() => navigate("./")}>
            <h4>CONTACT</h4>
         </a>
         
         <a onClick={() => navigate("/BlogPosts")} >
            <h4 >BLOGS</h4>
         </a>
         
      </div>
   </nav>
  )
}
