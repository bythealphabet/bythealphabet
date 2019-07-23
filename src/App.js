import React from "react";
import MainRouter from "./MainRouter";
import { Router } from "react-router-dom";
import history from "./history"

const App = () => {
  return (
    <Router history={history}>
      <MainRouter />
    </Router>
  );
};

export default App;