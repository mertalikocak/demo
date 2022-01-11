import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function About() {
  const [name, setName] = useState("white");

  function HandleClick(name) {
    if (name === "white") setName("black");
    else setName("white");
  }

  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: name,
        }}
      >
        About
      </div>
      <Link to="/home">Click here to Home</Link>
      <button
        onClick={() => {
          HandleClick(name);
        }}
      >
        Click me
      </button>
      <Link to="/languages">Click here to Languages</Link>
    </React.Fragment>
  );
}

export default About;
