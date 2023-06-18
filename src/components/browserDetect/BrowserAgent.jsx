import React, { useEffect, useState } from 'react'

export default function BrowserAgent() {

 const [browser, setBrowser] = useState('');


 function detectBrowser(){
             
  let userAgent = navigator.userAgent;
  
  // Detect browser name
  if(userAgent.match(/chrome|chromium|crios/i)){ // Detect Chrome
   setBrowser("chrome");
    }else if(userAgent.match(/firefox|fxios/i)){  // Detect Firefox
     setBrowser("firefox");
    }  else if(userAgent.match(/safari/i)){ // Detect Safari
     setBrowser("safari");
    }else if(userAgent.match(/opr\//i)){ // Detect Opera
      setBrowser("opera");
    } else if(userAgent.match(/edg/i)){ // Detect Edge
      setBrowser("edge");
    }else{
      setBrowser("No browser detection"); // No browser detected
    }
   
   }


   useEffect(() => {
    detectBrowser()
    console.log(browser+" browser detected")
   }, [])



  return (
    <></>
  )
}
