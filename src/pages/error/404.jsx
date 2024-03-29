import React from 'react'
import './error.css'

export default function ErrorPage() {

  //Load this error page when an unknown endpoint/url is entered into browser.
  return (
    <div className='error'>
    
      <h2>The page you are looking for does not exist.</h2>
        <h2>Please return to the main page...</h2>
      
      </div>
  )
}
