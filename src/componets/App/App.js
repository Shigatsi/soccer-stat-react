import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Competitions from "../Competitions/Competitions.js";

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header />
          <Competitions />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
