import React from "react";

//components
import Background from "../../components/background/background.component";
import Button from "../../components/button/button.component";

const Home = () => (
  <div className="container">
    <Background />
    <Button
      onClick={() => {
        if (
          !document.getElementById("menu-item").classList.contains("animate")
        ) {
          document.getElementById("menu-item").classList.add("animate");
        } else {
          document.getElementById("menu-item").classList.remove("animate");
        }
      }}
    />
    <Button logo />
  </div>
);

export default Home;
