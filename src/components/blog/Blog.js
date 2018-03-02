import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";

import "./Blog.css";

class Blog extends Component {
  state = {};
  render() {
    return (
      <div>
        <Image src="assets/books.jpg" className="header-image" />
        <Grid>
          <h2>Blog</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>
                God gave you this gift of imagination. Use it. Let your heart take you to wherever
                you want to be. Let's make some happy little clouds in our world.
              </p>

              <p>
                Work that paint. But we're not there yet, so we don't need to worry about it. I
                thought today we would do a happy little picture.
              </p>
              <p>
                It's amazing what you can do with a little love in your heart. We have a fantastic
                little sky! Clouds are free they come and go as they please.
              </p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/deathCheese.jpeg" />
              <p> I thought today we would do a happy little picture. </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Blog;
