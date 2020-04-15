import React from "react";
import ReactBodymovin from "react-bodymovin";
import Lottie from "react-lottie";
import "./App.css";

import Home from "./pages/home/home.component";
import LoadingScreen from "./components/loadingScreen/loadingScreen.component";

import logoWalking from "./assets/logoWalking.json";

function App() {
  return (
    <div className="App">
      <LoadingScreen />
    </div>
  );
}

export default App;
