import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { Container } from "semantic-ui-react";

import User from "./pages/User";

import Routes from "./routes";
import "./global.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
