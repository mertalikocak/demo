import React from "react";
import Header from "./header_component";
import Footer from "./footer_component";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Overview from "../pages/Course";
import Lesson from "../pages/Lesson";
import NotFound from "../pages/404";
import ScrollToTop from "../ScrollToTop";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";

function Main() {
  return (
    <React.Fragment>
      <div>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route path="/course/:course/:lessonNo">
            <Lesson />
          </Route>
          <Route path="/course/:course">
            <Overview />
          </Route>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="">
            <NotFound />
          </Route>
          <Redirect path="/" />
        </Switch>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default withRouter(Main);
