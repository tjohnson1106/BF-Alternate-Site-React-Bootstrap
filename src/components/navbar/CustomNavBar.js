import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomNavBar.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <Navbar default collapseOnSelect fixedTop true>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Bracket Factory</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/blog" to="/blog">
              Blog
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
