import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import BackgroundSVG from "./components/BackgroundSVG";
import './cursor.scss'
import { React, createContext, useState } from "react";
import ErrorPage from "./pages/error/404";
import Home from "./pages/Home/Home";
import BlogPosts from "./pages/blogposts/BlogPosts";
import Blog from "./pages/blogposts/Blog.jsx";


export const sharedState = createContext();

export default function App() {

  const [name, setName]                  = useState('Jason');
  const [animationCSS, setAnimationCSS]  = useState('bounce-in-top')
  const [thisBlog, setThisBlog]          = useState('')
  
  ;
  return (
   
       <sharedState.Provider value={[name, setName, animationCSS, setAnimationCSS, thisBlog, setThisBlog]}>
          <div className="App custom-cursor">
          <BackgroundSVG />
  
          <div className="main-container">
            <Router>
              <Navigation />
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/BlogPosts" element={<BlogPosts />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="*" element={<ErrorPage />} />
              </Routes>
            </Router>
          </div>
        </div>
       </sharedState.Provider>
    
  )
}

 