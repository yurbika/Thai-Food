import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

//components
import Home from "./pages/home/home.component";
import Menu from "./pages/menu/menu.component";
import Navbar from "./components/navbar/navbar.component";
import Button from "./components/button/button.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Button menu />
      <Button left />
      <Suspense fallback={"loading..."}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
