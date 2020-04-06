import React from "react";

// styles
import {
  Container,
  BackgroundContainer,
  BigImgContainer,
  TriangleContainer,
} from "./background.styles";

//assets
import BigIcon from "../../assets/big-icon.svg";
import TriangleIcon from "../../assets/triangle.svg";

const Background = () => (
  <Container>
    <BackgroundContainer>
      <TriangleContainer left>
        <img src={TriangleIcon} alt="Backgroung" className="mirrored" />
      </TriangleContainer>
      <BigImgContainer>
        <img src={BigIcon} alt="Backgroung" />
      </BigImgContainer>
      <TriangleContainer>
        <img src={TriangleIcon} alt="Backgroung" />
      </TriangleContainer>
    </BackgroundContainer>
  </Container>
);

export default Background;
