import React from 'react'
import { useContext } from 'react'
import { sharedState } from '../../App'
import './blog.css';
import { nanoid } from 'nanoid';
import backBtn from '../../img/back.png'
import { useNavigate } from 'react-router';


export default function Blog() {
  
  let state = useContext(sharedState)
  let [, , , , thisBlog, setThisBlog] = state;
  let navigate = useNavigate()

  function goBack(){
    navigate('/blogposts')
  }

  return (
    <>
      <div className='blog-container div-cont' key={nanoid()}>
        <h1 key={nanoid()}>{thisBlog.blog.heading}</h1>
        <br/>
        <p key={nanoid()}>{thisBlog.blog.description.intro.replace("..",'')}</p>
        <br/>
        {thisBlog.blog.description.paragraph}
        <i key={nanoid()}>cr. {thisBlog.created} </i>
       
      </div>
      <img onClick={goBack} className='back-arrow2 slide-in-bottom' src={backBtn} alt='scroll button'/>
    </>
  )
}
