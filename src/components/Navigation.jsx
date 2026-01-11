/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import ReactGA from "react-ga";
import "./navigation.css";
import { sharedState } from "../App";
import LoginModal from "./LoginModal";
import { produce } from "immer";
import { gsap } from "gsap";
import { set } from "react-ga";

export default function Navigation() {
  let value = useContext(sharedState);
  const borderLine = useRef(null);

  const { state, setState } = value;

  let navigate = useNavigate();
  //Tell google analytics what button was clicked
  function events(cat, act) {
    ReactGA.event({
      category: cat,
      action: act,
    });
  }

  // linear-gradient(270deg,#1d1a1a 0,#c22948 50%,#1d1a1a)
  // set nav-container  linear-gradient 2nd index from 50% to 100% then back to 50% continuously using gsap
  // Use useEffect to setup GSAP animation
  useEffect(() => {
    // if (borderLine.current) {
    //   gsap.fromTo(
    //     borderLine.current,
    //     {
    //       borderImage: `linear-gradient(to left, #1d1a1a 0%, #C22948 50%, #1d1a1a 100%)`,
    //     },
    //     {
    //       borderImage: `linear-gradient(to left, #1d1a1a 40%, #C22948 50%, #1d1a1a 60%)`,
    //       duration: 1.5,
    //       ease: "linear",
    //       repeat: -1, // repeat indefinitely
    //     }
    //   );
    // }
  }, []); // Empty dependency array ensures it runs only once after mount

  const scrollToTop = () => {return  window.scrollTo(0, 0);}
  return (
    <div className={state.nav} ref={borderLine}>
      {/* <p className="log-in-btn">LOGIN</p> */}

      <div className="inner-nav">
        <Link
          href="#main"
          to="/"
          onClick={() => {
           scrollToTop()
            events("Button", "main");
          }}
        >
          <p>MAIN</p>
        </Link>
        <Link
          to="/mywork/"
          onClick={() => {
            scrollToTop();
            events("Button", "mywork");
          }}
        >
          <p>MY WORK</p>
        </Link>
        <Link
          to="/about"
          onClick={() => {
            scrollToTop()
            events("Button", "bout");
            setState(
              produce((state) => {
                state.currentPage = "/about";
              })
            );
          }}
        >
          <p>ABOUT ME</p>
        </Link>
        <Link
          to="/contact"
          onClick={() => {
            scrollToTop()
            events("Button", "contact");
            setState(
              produce((state) => {
                state.currentPage = "/contact";
              })
            );
          }}
        >
          <p>CONTACT</p>
        </Link>

        <Link
          to="/services"
          onClick={() => {
            scrollToTop()
            events("Button", "services");
            setState(
              produce((state) => {
                state.currentPage = "/services";
              })
            );
          }}
        >
          <p>SERVICES</p>
        </Link>

        <Link
          to="/blogposts"
          onClick={() => {
            scrollToTop()
            events("Button", "Blogposts");
            setState(
              produce((state) => {
                state.currentPage = "blogs";
              })
            );
          }}
        >
          <p>BLOGS</p>
        </Link>
        <LoginModal />
      </div>
    </div>
  );
}
