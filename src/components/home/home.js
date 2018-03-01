import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Bracket Factory</h2>
          <p>Implementing the Future</p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="../../images/profile.jpeg"
              circle
              className="profile-pic"
            />
            <h3>Person</h3>
            <p>
              One morning, when Gregor Samsa woke from troubled dreams, he found
              himself transformed in his bed into a horrible vermin.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="../../images/profile.jpeg"
              circle
              className="profile-pic"
            />
            <h3>Person</h3>
            <p>
              One morning, when Gregor Samsa woke from troubled dreams, he found
              himself transformed in his bed into a horrible vermin.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="../../images/profile.jpeg"
              circle
              className="profile-pic"
            />
            <h3>Person</h3>
            <p>
              One morning, when Gregor Samsa woke from troubled dreams, he found
              himself transformed in his bed into a horrible vermin.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
