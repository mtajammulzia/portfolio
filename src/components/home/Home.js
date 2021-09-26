import React from "react";
import "./Home.css";
import myImg from "../../img/myImg.png";

function Intro() {
  return (
    <section className="home-page" id="scroll-to-home">
      <div className="text-layout">
        <h1>
          <span id="titleLine1">Hello</span>
          <span>I'm Tajammul</span>
        </h1>
        <h4>Software Engineer, Comics</h4>
        <h4>and Travel Enthusiast.</h4>
        <h4>Welcome to my Portfolio!</h4>
      </div>
      <div className="img-background">
        <img className="img" src={myImg} alt="myImage" />
      </div>
    </section>
  );
}

export default Intro;
