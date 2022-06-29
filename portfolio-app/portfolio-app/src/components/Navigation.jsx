import React from 'react'

export default function Navigation() {
  return (
   <nav className="nav" id="top-nav">
      <div className="nav-container">
         <a className="active" href="#section-3">
            <h4>MY WORK</h4>
         </a>
         <a href="#section-2">
            <h4>ABOUT ME</h4>
         </a>
         <a href="#section-4">
            <h4>CONTACT</h4>
         </a>
      </div>
   </nav>
  )
}
