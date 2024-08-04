import React from "react";
import "./blogPosts.css";
import list from "../../components/data/BlogList";
import { useContext } from "react";
import { sharedState } from "../../App";
import { useNavigate } from "react-router-dom";
import { produce } from "immer";

export default function BlogPosts() {
  let navigate = useNavigate();
  let state = useContext(sharedState);
  const { setState } = state;

  // Reverse the list to show the last index first
  const reversedList = [...list].reverse();

  return (
    <div className="blog-posts-container">
      <h1 className="main-heading">BLOGS</h1>
      {reversedList.map((item, index) => (
        <div
          className={
            index % 2 === 0
              ? "div-cont blog post slide-in-left"
              : "div-cont blog post slide-in-right"
          }
          key={index}
        >
          <div className="head-content">
            <h3>{item.blog.heading}</h3>
            <i className="posted-date">{item.created} </i>
          </div>
          <div className="desc">
            <p>
              {item.blog.description.intro}
              <i
                onClick={function toBlog() {
                  setState(produce((state) => {
                         state.thisBlog = item;
                        }));
                  navigate("/blogposts/blog");
                }}
              >
                Read more
              </i>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
