import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>
            <p>
              Bracket Factory Built on ReactJS, React-Bootstrap and React-Router
            </p>
          </h2>
        </Jumbotron>
        <Link to="/about">
          <Button bsStyle="primary">About</Button>
        </Link>
      </Grid>
    );
  }
}

export default Home;
