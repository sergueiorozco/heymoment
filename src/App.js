import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";

function App() {
  return (
      <div className="App">
        <header>
          <nav className="top-nav-full">
            <div className="navbar-nav mr-auto">
              <Link to="/" className="nav-link">
                {" "}
                Home{" "}
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </div>
          </nav> 
        </header>

        <body className="flex-container">
          {this.props.conent}
        </body>
      </div>
  );
}

export default App;
