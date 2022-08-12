import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import BackgroundSVG from "./components/BackgroundSVG";
import AboutMe from "./components/sections/about/AboutMe";
import Education from "./components/sections/education/Education";
import Contact from "./components/sections/contact/Contact";
import './cursor.scss'
import { React, createContext, useState } from "react";
import MyWork from "./components/sections/my-work/MyWork";
import HeroImage from "./components/sections/hero-image/HeroImage";
import ErrorPage from "./pages/error/404";
import Home from "./pages/Home/Home";
import BlogPosts from "./pages/blog_posts/BlogPosts";

export const sharedState = createContext();

export default function App() {

  const [name, setName] = useState('Jason');
  const [animationCSS, setAnimationCSS] = useState('bounce-in-top')
  
  ;
  return (
   
       <sharedState.Provider value={[name, setName, animationCSS, setAnimationCSS]}>
          <div className="App custom-cursor">
          <BackgroundSVG />
  
          <div className="main-container">
            <Router>

              <Navigation />
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/BlogPosts" element={<BlogPosts />} />
              <Route path="*" element={<ErrorPage />} />
              </Routes>
            </Router>
          </div>
        </div>
       </sharedState.Provider>
    
  )
}

 