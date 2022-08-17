/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import ReactGA from 'react-ga'
import './navigation.css'
import { sharedState } from '../App';

export default function Navigation() {

   let state = useContext(sharedState)

   let [, , , , , , nav, setNav] = state;
   
   let navigate = useNavigate();
   //Tell google analytics what button was clicked
   function events(cat,act){
         ReactGA.event({
               category: cat,
               action: act
         });
   }


  return (

      <div className={nav}>
         <a className="active" href="#main" onClick={()=>{
            navigate("./");
            events("Button", "main");
         
            } }>
            <h4>MAIN</h4>
         </a>
         <a className="active" href="#work" onClick={() => {
            navigate("./");
            events("Button", "My Work");
            }}>
            <h4 >MY WORK</h4>
         </a>
         <a href="#about" onClick={() => {
            navigate("./");
            events("Button", "About");
            }}>
            <h4>ABOUT ME</h4>
         </a>
         <a href="#contact" onClick={() => {
            navigate("./");
            events("Button", "Contact");
            }}>
            <h4>CONTACT</h4>
         </a>
         
         <a onClick={() => {
            navigate("/blogposts");
            events("Button", "Blogposts");
            
            } } >

            <h4 >BLOGS</h4>
         </a>
         
      </div>
  
  )
}
