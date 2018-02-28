import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/home/Home";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import NavBar from "./components/navbar/CustomNavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
        </div>
      </Router>
    );
  }
}

export default App;
