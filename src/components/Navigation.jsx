/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import ReactGA from "react-ga";
import "./navigation.css";
import { sharedState } from "../App";

export default function Navigation() {
  let state = useContext(sharedState);

  let [, , , , , , nav, setNav] = state;

  let navigate = useNavigate();
  //Tell google analytics what button was clicked
  function events(cat, act) {
    ReactGA.event({
      category: cat,
      action: act,
    });
  }

  return (
    <div className={nav}>
      {/* <p className="log-in-btn">LOGIN</p> */}

      <Link
       
        href="#main"
        to="/"
        onClick={() => {
          window.scrollTo(0, 0);
          events("Button", "main");
        }}
      >
        <p>MAIN</p>
      </Link>
      <a
        
        href="#work"
        onClick={() => {
          navigate("./");
          events("Button", "My Work");
        }}
      >
        <p>MY WORK</p>
      </a>
      <a
        href="#about"
        onClick={() => {
          navigate("./");
          events("Button", "About");
        }}
      >
        <p>ABOUT ME</p>
      </a>
      <a
        href="#contact"
        onClick={() => {
          navigate("./");
          events("Button", "Contact");
        }}
      >
        <p>CONTACT</p>
      </a>

      <Link
        to="/blogposts"
        onClick={() => {
          events("Button", "Blogposts");
          setNav("");
          setTimeout(() => {
            setNav("nav-container");
          }, 1);
        }}
      >
        <p>BLOGS</p>
      </Link>
    </div>
  );
}
