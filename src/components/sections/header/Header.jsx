import React, { useContext } from 'react'
import { sharedState } from '../../../App';
import './style.css'
import './NameAnimation.css'
import { useState } from 'react';
import { produce } from 'immer';

export default function Header() {

 let value = useContext(sharedState)

 const {state, setState} = value

  //update array if 1st letter is clicked
  function edit(e) {
   let newName = prompt("Change Name", state.name);
    if (newName != null) {
     setState(produce((state) => {state.name = ''}));
     setTimeout(() => {
      setState(produce((state) => {state.name = newName}));
     }, 100);
     
   }  
  }
 
  //give each letter a number using set-attribute
  let num = 1;


  return (
    <>
           <div className="intro-headings">
        <div onClick={edit}>
          <div className='animatedWord'>
            {/* Name effect */}
           {state.name.split('').map((letter, index) => (
             <h1 className={`first-name ${state.animationCSS}`} style={{animationDuration:`1.${num++}s`}}  data-id={num++}  key={index}>
               {letter}
             </h1>
           )).splice(0,6)}
          </div>
         
          <h1 className="last-name " >Morta</h1>
        </div>
        <h3>
          <span className="stack">MERN Stack</span> Web-Developer
        </h3>
      </div>
    </>
  )
}
