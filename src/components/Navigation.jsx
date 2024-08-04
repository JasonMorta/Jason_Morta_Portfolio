/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import ReactGA from "react-ga";
import "./navigation.css";
import { sharedState } from "../App";
import LoginModal from "./LoginModal";
import { produce } from "immer";

export default function Navigation() {
  let value = useContext(sharedState);


  const { state, setState } = value;

  let navigate = useNavigate();
  //Tell google analytics what button was clicked
  function events(cat, act) {
    ReactGA.event({
      category: cat,
      action: act,
    });
  }

  return (
    <div className={state.nav}>
      {/* <p className="log-in-btn">LOGIN</p> */}

      <div className="inner-nav">
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
            setState(produce((state) => { state.nav = ""}));
            setTimeout(() => {
              setState(produce((state) => { state.nav = "nav-container nav-slide"}));
            }, 1);
          }}
        >
          <p>BLOGS</p>
        </Link>
       <LoginModal />
      </div>
    </div>
  );
}
