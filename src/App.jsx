import React from "react";
import { Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="landing-badge">🌿 Est. 2024 · Berlin, Germany</div>

        <h1>
          Paradise <span>Nursery</span>
        </h1>

        <AboutUs />

        <Link to="/products" className="get-started-btn">
          Get Started →
        </Link>
      </div>
    </div>
  );
}

export default App;
