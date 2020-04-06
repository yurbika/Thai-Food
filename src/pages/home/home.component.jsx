import React from "react";

//components
import Background from "../../components/background/background.component";
import Button from "../../components/button/button.component";

//styles
import { Container } from "./home.styles";

const Home = () => (
  <Container>
    <Background className="background" />
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
    <div className="text-container">
      <span>The Original</span>
      <span>Thai Food</span>
      <span>
        Get your original thai menu <br></br>- traditional family recipe
      </span>
    </div>
  </Container>
);

export default Home;
