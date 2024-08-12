import React from 'react'

export default function BackgroundSVG() {
  return (
   <div className="background">
     <div className="gradient-background__wrapper">
        <div className="gradient-background">
          <div className="gradient-background__shape gradient-background__shape--1"></div>
          <div className="gradient-background__shape gradient-background__shape--2"></div>
        </div>
        <div className="gradient-background__noise"></div>
      </div>
   </div>
  )
}
 