import React from "react";
import Header from "./header_component";
import Footer from "./footer_component";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Languages from "./LanguagesComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

function Main() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/languages" component={Languages} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default withRouter(Main);
