import React, { useContext } from 'react'
import { sharedState } from '../../../App';
import './style.css'
import './NameAnimation.css'
import { useState } from 'react';

export default function Header() {

 let state = useContext(sharedState)

 let [name, setName, animationCSS,] = state

  //update array if 1st letter is clicked
  function edit(e) {
   let newName = prompt("Change Name", name);
    if (newName != null) {
     setName('')
     setTimeout(() => {
      setName(newName)
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
           {name.split('').map((letter, index) => (
             <h1 className={`first-name ${animationCSS}`} style={{animationDuration:`1.${num++}s`}}  data-id={num++}  key={index}>
               {letter}
             </h1>
           ))}
          </div>
         
          <h1 className="last-name " >Morta</h1>
        </div>
        <h3>
          <span className="stack">Full Stack</span> Web-Developer
        </h3>
      </div>
    </>
  )
}
