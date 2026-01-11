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
import Contact from "./components/sections/contact/Contact.jsx";
import MyWork from "./components/sections/my-work/MyWork.jsx";
import AboutMe from "./components/sections/about/AboutMe.jsx";
import Services from "./components/Pages/Services.jsx";

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
    skillIcons: [],
    currentUser: null,
    isLoggedIn: false,
    nav: "nav-container",
    currentPage: "/",
  });

  return (
    <sharedState.Provider value={{ state, setState }}>
      <div className="App custom-cursor">
        <BrowserAgent />
        <BackgroundSVG />
        <Router>
          <Navigation />
          <SmoothScroll>
            <div className="main-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blogposts/" element={<BlogPosts />} />
                <Route path="/mywork/" element={<MyWork />} />
                <Route path="/about/" element={<AboutMe />} />
                <Route path="/blogposts/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
          </SmoothScroll>
          <ScrollToTop />
        </Router>
      </div>
    </sharedState.Provider>
  );
}
