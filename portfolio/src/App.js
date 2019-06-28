import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Layout fixedHeader>
          <Header className="header-color" title="Title" scroll>
            {/* <Drawer title="Title"> */}
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
            {/* </Drawer> */}
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            {/* Body of the page will be here */}
            <div className="pageContent" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
