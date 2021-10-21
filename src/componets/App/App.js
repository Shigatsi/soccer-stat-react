import React from "react";
import { Switch } from "react-router";

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
