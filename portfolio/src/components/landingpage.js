import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div className="landingMain">
        <Grid className="landing-grid">
          <Cell col={12}>1</Cell>
          <Cell col={12}>1</Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
