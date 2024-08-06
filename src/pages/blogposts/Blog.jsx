import React from "react";
import { useContext } from "react";
import { sharedState } from "../../App";
import "./blog.css";
import { nanoid } from "nanoid";
import ErrorPage from "../error/404";

export default function Blog() {
  const { state } = useContext(sharedState);
  const { thisBlog } = state;

  return (
    <>
      <div className="blog-container div-cont" key={nanoid()}>
        <h1 key={nanoid()}>{thisBlog?.blog?.heading}</h1>
        <br />
        <p key={nanoid()}>
          {thisBlog?.blog?.description?.intro.replace("..", "")}
        </p>
        <br />
        {thisBlog?.blog?.description?.paragraph}
        <i key={nanoid()}>cr. {thisBlog?.created} </i>
      </div>
    </>
  );
}
