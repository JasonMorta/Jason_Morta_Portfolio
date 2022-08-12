import React from 'react'
import { useContext } from 'react'
import { sharedState } from '../../App'
import './blog.css'

export default function Blog() {

  let state = useContext(sharedState)
  let [, , , , thisBlog, setThisBlog] = state;

  console.log(thisBlog)

  return (
    <div className='blog-container div-cont'>
      <h1>{thisBlog.blog.heading}</h1>
      <br/>
      <p>{thisBlog.blog.description.intro.replace("..",'')}</p>
      <br/>
      <p>{thisBlog.blog.description.paragraph}</p>
      <i>cr. {thisBlog.created} </i>
    </div>
  )
}
