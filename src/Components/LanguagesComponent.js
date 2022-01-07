import React from "react";
import { Link } from "react-router-dom";

function Languages() {
  return (
    <React.Fragment>
      <div>Languages</div>
      <Link to="/home">Click Here to home</Link>
      <Link to="/about">Click Here to about</Link>
    </React.Fragment>
  );
}

export default Languages;
