import "./styles/App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import BackgroundSVG from "./components/BackgroundSVG";
import "./styles/cursor.scss";
import { React, createContext, useState } from "react";
import ErrorPage from "./pages/error/404";
import Home from "./pages/Home/Home";
import BlogPosts from "./pages/blogposts/BlogPosts";
import Blog from "./pages/blogposts/Blog.jsx";
import { useEffect } from "react";
import ReactGA from "react-ga";
import BrowserAgent from "./components/browserDetect/BrowserAgent";
import ScrollToTop from "./components/toTop/ScrollToTop";
import SmoothScroll from "./SmootheScroll.jsx";

export const sharedState = createContext();

export default function App() {

  // Google Analytics 
  useEffect(() => {
    ReactGA.initialize("UA-237424331-1");
    //To report page view
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const [state, setState] = useState({
    name: "Jason",
    animationCSS: "bounce-in-top",
    thisBlog: "",
    currentUser: null,
    isLoggedIn: false,
    nav: "nav-container",
  });

  return (
    <SmoothScroll>
    <sharedState.Provider
      value={{state, setState}}
    >
      <div className="App custom-cursor">
        <BrowserAgent />
        <BackgroundSVG />
        <Router>
          <Navigation />

          <div className="main-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogposts/" element={<BlogPosts />} />
              <Route path="/blogposts/blog" element={<Blog />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
          <ScrollToTop />
        </Router>
      </div>
    </sharedState.Provider>
    </SmoothScroll>
  );
}
