import React from "react";
import gitLogo from "../../../img/gitHub.svg";
import mapImg from "../../../img/map.png";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Contact() {
  // get current route
  const location = useLocation();

  // log route
  console.log(location.pathname);
  return (
    <div>
      <section id="contact" className="contact-form">
        <div className="div-cont">
          <h1>Get In Touch</h1>
          <div className="contact-map">
            <img src={mapImg} alt="location" className="my-location" />
          </div>
          <p>I'm based in Cape Town, Sea Point, South Africa</p>
          <div>
            <h4 style={{ margin: "0px" }}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdmZbwxAPdHjtiYm86enNefolniyr8IOqgiCFroPierbY2PTA/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Me a Message
              </a>
            </h4>
            <h4 style={{ margin: "0px 0px 20px" }}>jasonmortadev@gmail.com</h4>
          </div>
          <a
            href="https://github.com/JasonMorta"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={gitLogo}
              alt="link_image"
              width="50px"
              title="my github profile link"
            />
          </a>
        </div>
      </section>
    </div>
  );
}
