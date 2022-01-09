import React from "react";
import Header from "./header_component";
import Footer from "./footer_component";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Csharp from "./Csharp";
import Java from "./java";
import Python from "./python";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";

function Main() {
  return (
    <React.Fragment>
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/csharp" component={Csharp} />
          <Route path="/java" component={Java} />
          <Route path="/python" component={Python} />

          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default withRouter(Main);
