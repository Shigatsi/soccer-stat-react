import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
