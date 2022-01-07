import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <React.Fragment>
      <div>About</div>
      <Link to="/home">Click here to Home</Link>
      <Link to="/languages">Click here to Languages</Link>
    </React.Fragment>
  );
}

export default About;
