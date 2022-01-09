import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <div id="div1">Home</div>
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-2">1 of 3</div>
          <div class="col-md-auto">Variable width content</div>
          <div class="col col-lg-2">3 of 3</div>
        </div>
        <div class="row">
          <div class="col">1 of 3</div>
          <div class="col-md-auto">Variable width content</div>
          <div class="col col-lg-2">3 of 3</div>
        </div>
      </div>
      <Link to="/languages">Click Here to Languages</Link>
      <Link to="/about">Click Here to about</Link>
    </React.Fragment>
  );
}

export default Home;
