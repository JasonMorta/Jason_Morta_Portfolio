/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./style.css";

export default function Education() {
  return (
    <section id="section-2" className="about-section">
      <div className="div-cont">
        <header>
          <h1 style={{ color: "gray" }}>Developer Education</h1>
          <p>
            I began my journey into web development in 2019 by taking some
            online classes, although they didn't yield the desired outcomes I
            had anticipated. However, in April 2022, I made a significant leap
            by enrolling in and successfully completing the Full-Stack Web
            Developer course at{" "}
            <a href="https://www.hyperiondev.com/">HyperionDev</a>'s on-site
            boot camp and haven't stopped coding since I found my passion.
          </p>

          <br />
          <div className="edu-links">
            {/* <a className='resume-link' 
               href="" 
               target="_blank" 
               rel="noreferrer">
               🔗My Resume(PDF)
            </a> */}

            <a
              className="resume-link"
              href="https://www.hyperiondev.com/portfolio/44140/"
              target="_blank"
              rel="noreferrer"
            >
              🔗My HyperionDev Portfolio
            </a>
            <a
              className="resume-link"
              href="https://drive.google.com/file/d/1Vkmrp9vdxqDNuQT2Sj2GF98jpW8JJqfH/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              🔗Bootcamp Completion Certificate
            </a>
          </div>
        </header>
      </div>
    </section>
  );
}
