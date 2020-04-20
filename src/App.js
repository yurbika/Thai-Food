import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/home/home.component";
import Navbar from "./components/navbar/navbar.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={"loading..."}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
