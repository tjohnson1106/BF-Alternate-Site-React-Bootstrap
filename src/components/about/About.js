import React, { Component } from "react";
import { Grid, Col, Image } from "react-bootstrap";
import "./About.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <Image src="assets/lips.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/wall.jpeg" className="about-profile-pic" rounded />
            <h3>Profile Person</h3>
            <p>You gotta think like a tree. See there, told you that would be easy.</p>
            <p>
              Don't fight it, use what happens. It is a lot of fun. Just beat the devil out of it.
            </p>
            <p>
              The light is your friend. Preserve it. There's nothing wrong with having a tree as a
              friend.
            </p>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default About;
