import React from "react";
import Header from "./header_component";
import Footer from "./footer_component";
import Home from "../pages/Home";
import About from "../pages/About";
import Csharp from "../pages/csharp/csharp1";
import Java from "../pages/javaScript/java1";
import Python from "../pages/python/python1";
import Csharp2 from "../pages/csharp/csharp2";
import Python2 from "../pages/python/python2";
import Java2 from "../pages/javaScript/java2";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";

function Main() {
  return (
    <React.Fragment>
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/csharp1" component={Csharp} />
          <Route path="/csharp2" component={Csharp2} />
          <Route path="/java1" component={Java} />
          <Route path="/java2" component={Java2} />

          <Route path="/python1" component={Python} />
          <Route path="/python2" component={Python2} />

          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default withRouter(Main);
