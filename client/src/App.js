import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Books from "./pages/Books";
import Nav from "./components/Nav";

const App = () => (
  <div>
    <Nav />
    <Books />
  </div>
);

export default App;
