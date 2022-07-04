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
      counter: 1,
      newTest: [],
      newName: [],
      prompt:[]
      
    };
    console.log("Initial: "+ typeof this.state.name)
  }

 

  count=()=>{
    this.setState({
      newTest: this.newName,
      counter: this.counter++
    })
    console.log(this.state.newTest)
  }







  render() {
    return (
      <div className="App custom-cursor">
        <BackgroundSVG />

        <div className="main-container">
          <Navigation />
          <HeroImage
         
          newName={this.state.newName}
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
