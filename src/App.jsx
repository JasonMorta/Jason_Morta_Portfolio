import { createContext, useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import styles from "./styles/App.module.css";
import Navigation from "./components/Navigation.jsx";
import BackgroundSVG from "./components/BackgroundSVG.jsx";
import BrowserAgent from "./components/browserDetect/BrowserAgent.jsx";
import ScrollToTop from "./components/toTop/ScrollToTop.jsx";
import SmoothScroll from "./SmootheScroll.jsx";
import ErrorPage from "./pages/error/404.jsx";
import Home from "./pages/Home/Home.jsx";
import BlogPosts from "./pages/blogposts/BlogPosts.jsx";
import Blog from "./pages/blogposts/Blog.jsx";
import Contact from "./components/sections/contact/Contact.jsx";
import MyWork from "./components/sections/my-work/MyWork.jsx";
import AboutMe from "./components/sections/about/AboutMe.jsx";
import Services from "./components/Pages/Services.jsx";

export const sharedState = createContext(null);

function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize("UA-237424331-1");
  }, []);

  useEffect(() => {
    ReactGA.pageview(`${location.pathname}${location.search}`);
  }, [location]);

  return null;
}

function AppShell() {
  return (
    <div className={`${styles.app} ${styles.customCursor}`}>
      <BrowserAgent />
      <BackgroundSVG />
      <Navigation />
      <SmoothScroll>
        <main className={styles.mainContainer}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogposts" element={<BlogPosts />} />
            <Route path="/mywork" element={<MyWork />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/blogposts/:slug" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </SmoothScroll>
      <ScrollToTop />
      <RouteTracker />
    </div>
  );
}

export default function App() {
  const [state, setState] = useState({
    name: "Jason",
    animationCSS: "bounceInTop",
    thisBlog: null,
    isLoggedIn: false,
  });

  const value = useMemo(() => ({ state, setState }), [state]);

  return (
    <sharedState.Provider value={value}>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </sharedState.Provider>
  );
}
