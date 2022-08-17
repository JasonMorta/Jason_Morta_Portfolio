import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import BackgroundSVG from "./components/BackgroundSVG";
import './styles/cursor.scss'
import { React, createContext, useState } from "react";
import ErrorPage from "./pages/error/404";
import Home from "./pages/Home/Home";
import BlogPosts from "./pages/blogposts/BlogPosts";
import Blog from "./pages/blogposts/Blog.jsx";
import { useEffect } from "react";
import ReactGA from 'react-ga';


export const sharedState = createContext();

export default function App() {

  useEffect(() => {
    ReactGA.initialize('UA-237424331-1')
    //To report page view
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  

  const [name, setName]                  = useState('Jason');
  const [animationCSS, setAnimationCSS]  = useState('bounce-in-top')
  const [thisBlog, setThisBlog]          = useState('')
  
  ;
  return (
   
       <sharedState.Provider value={[name, setName, animationCSS, setAnimationCSS, thisBlog, setThisBlog]}>
     
            <div className="App custom-cursor">
      
    
            
              <Router>
                <Navigation />
                <div className="main-container">
                <BackgroundSVG />
                <Routes>
                
                  <Route path="/" element={<Home />} />
                  <Route path="/BlogPosts" element={<BlogPosts />} />
                  <Route path="/Blog" element={<Blog />} />
                  <Route path="*" element={<ErrorPage />} />
              
                </Routes>
              </div>
              </Router>
            
          </div>
         
       </sharedState.Provider>
    
  )
}

 