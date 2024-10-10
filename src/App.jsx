import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="Name">
        <h1 className="Name2">Brilliant</h1>
        <button className="Button">Log in</button>
      </div>
      <div className="card">
        <div className="div">
          {" "}
          <p className="N1">
            Learn by <span className="N3">doing</span>
          </p>
          <p className="N4">
            Guided interactive problem solving that’s effective and fun. Master
            concepts in 15 minutes a day.
            <button className="Button2">Get started</button>
          </p>
        </div>
        <video
          preload="auto"
          autoPlay
          loop
          muted
          src="https://brilliant.org/videos/homepage/lohp-hero-animation-dots.mp4"
          type="video/mp4"
          autoPlay
          loop
          className="vid"
        ></video>
      </div>
      <div>
        <p className="N5">Math</p>
        <p className="N6">Data Analysis</p>
      </div>

      <div className="M1">
        <p className="N7">Join over 10 million people learning on Brilliant</p>
      </div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/guided-lessons.png" className="logo" alt="guided-lessons" />
      </a>
    </div>
  );
}

export default App;
