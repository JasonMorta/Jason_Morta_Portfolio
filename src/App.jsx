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
import BrowserAgent from "./components/browserDetect/BrowserAgent";


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
  const [nav, setNav] = useState('nav-container')
  ;
  return (
   
       <sharedState.Provider value={[name, setName, animationCSS, setAnimationCSS, thisBlog, setThisBlog, nav, setNav]}>
     
            <div className="App custom-cursor">
      
            <BrowserAgent />
            <BackgroundSVG />
              <Router>
                <Navigation />
                
                <div className="main-container">
                
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

 