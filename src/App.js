import React from 'react';
import { ReactDOM } from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Lottie from "lottie-react";
import responsiveFile from "./data/responsive-lottie.json";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: responsiveFile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Button */}
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React With Swapnil
        </a>
        <Lottie
          options={defaultOptions}>
        </Lottie>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>

      </header>

    </div>
  );
}

export default App;
