import React, { Component } from 'react';

import './Readme.css';

class Readme extends Component {

  render(){

    return(
      <main className="readme-container">
        <h1 className="readme-h1">React Frontend Demo</h1>
        <h2 className="readme-h2"><a href="https://gunes-react-demo.herokuapp.com">Live Demo</a></h2>
        
        <h2 className="readme-h2">A quick walkthrough</h2>
        <p className="readme-p">
            I prepared two versions of this demo app. One is with Angular 7 and this one 
            is with React.
          <br />
            I had not have the chance to work with Angular before this challenge. My usual 
            go-to frontend framework for my own projects is React. That is why I wanted to 
            prepare two versions: one with Angular as a challenge for myself and another with 
            React as a fallback.
        </p>
        <h1 className="readme-h1">Installation</h1>
        <p>
        Unless you have Create-React-App installed already, please 
        do so for viewing the development build.
        </p>
        <code>npm install -g create-react-app</code>
        <p>
            After cloning solution repo to your computer,
            please run npm install since dependencies are not available in repo.
        </p>
        <code>npm install</code>
        <p>
            Then you should be able to run a development build via
        </p>
        <code>npm start</code>
        <p>
          You can view it from <a href="http://localhost:4200/">here</a> after 
          starting it on your localhost via 'npm start'.
        </p>
      </main>

    )
  }
}

export default Readme;