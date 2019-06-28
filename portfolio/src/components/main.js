import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./landingpage";
import AboutMe from "./about";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";

let Main = () => (
  <Switch>
    {/* Why are we wrapping everything in switch */}
    <Route exact path="/" component={Landing} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
);

export default Main;
