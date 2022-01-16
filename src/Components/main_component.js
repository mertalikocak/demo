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
//linkler burda importlanıyor
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

function Main() {
  return (
    <React.Fragment>
      <div>
        <Header />
        <ScrollToTop /> {/* Otomatik yukarı atma fonksiyonu */}
        <Switch>
          <Route path="/course/:course/:lessonNo">
            {/* Şablon sayfa */}
            <Lesson />
          </Route>
          <Route path="/course/:course">
            {/* Şablon sayfa */}
            <Overview />
          </Route>
          <Route exact path="/" component={Home} />
          {/* Şablon sayfa */}
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="">
            {/* 404 sayfası */}
            <NotFound />
          </Route>
          <Redirect path="/" /> {/* otomatik yönlendirme */}
        </Switch>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default withRouter(Main);
