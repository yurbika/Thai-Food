import React from "react";

//assets
import BigIcon from "../../assets/big-icon-higherOpacity.svg";

//styles
import { Container, ImgContainer } from "./popup.styles";

const Popup = ({ ...props }) => (
  <Container {...props}>
    <ImgContainer>
      <img src={BigIcon} alt="" />
    </ImgContainer>
  </Container>
);

export default Popup;
