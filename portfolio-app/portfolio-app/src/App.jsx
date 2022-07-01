import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import BackgroundSVG from "./components/BackgroundSVG";
import HeroImage from "./components/HeroImage";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Contact from "./components/Contact";
import MyWorks from "./components/MyWork";
import './cursor.scss'


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ['J','a','s','o','n'],
      counter: 1
    };
    console.log("Initial: "+this.state.name)
  }

 

  count=()=>{
    this.setState({
      counter: this.counter++
    })
    console.log(this.state.name)
  }
 






  render() {
    return (
      <div className="App custom-cursor">
        <BackgroundSVG />

        <div className="main-container">
          <Navigation />
          <HeroImage
          count={this.count.bind(this)}
          name={this.state.name}
             />
          <AboutMe />
          <Education />
          <MyWorks />
          <Contact />
        </div>
      </div>
    );
  }
}
