import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <div>Home</div>
      <Link to="/languages">Click Here to Languages</Link>
      <Link to="/about">Click Here to about</Link>
    </React.Fragment>
  );
}

export default Home;
