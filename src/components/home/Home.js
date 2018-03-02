import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Button, Image } from "react-bootstrap";
import "./Home.css";

class Home extends Component {
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
              src="https://images.pexels.com/photos/206572/pexels-photo-206572.jpeg?h=350&auto=compress&cs=tinysrgb"
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
              src="https://images.pexels.com/photos/413792/pexels-photo-413792.jpeg?h=350&auto=compress&cs=tinysrgb"
              circle
              className="profile-pic"
            />
            <h3>Person</h3>
            <p>
              One morning, when Gregor Samsa woke from troubled dreams, he found
              himself transformed in his bed into a horrible vermin.
            </p>
          </Col>
          <Col xs={12} sm={4} className="">
            <Image
              src="https://images.pexels.com/photos/893890/pexels-photo-893890.jpeg?h=350&auto=compress&cs=tinysrgb"
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
