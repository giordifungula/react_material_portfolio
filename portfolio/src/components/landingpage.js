import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div className="landingMain">
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294769_960_720.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              {/* Div under the image */}
              <h1>Full Stack Web Dev</h1>
              <p>
                HTML || CSS/Bootstrap || Javascript || React || NodeJS ||
                MongoDB || Python
              </p>
              <hr />
            </div>
          </Cell>
          <Cell col={12}>1</Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
