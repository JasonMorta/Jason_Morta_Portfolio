import React, { useEffect, useState } from 'react'

export default function BrowserAgent() {

 const [browser, setBrowser] = useState('');


 function detectBrowser(){
             
  let userAgent = navigator.userAgent;
  
  if(userAgent.match(/chrome|chromium|crios/i)){
   setBrowser("chrome");
    }else if(userAgent.match(/firefox|fxios/i)){
     setBrowser("firefox");
    }  else if(userAgent.match(/safari/i)){
     setBrowser("safari");
    }else if(userAgent.match(/opr\//i)){
      setBrowser("opera");
    } else if(userAgent.match(/edg/i)){
      setBrowser("edge");
    }else{
      setBrowser("No browser detection");
    }
   
   }


   useEffect(() => {
    detectBrowser()
   }, [])

console.log(browser+" browser detected")

  return (
    <div></div>
  )
}
