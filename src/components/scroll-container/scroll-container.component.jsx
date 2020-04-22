import React from "react";

//styles
import { Container } from "./scroll-container.styles";

const ScrollContainer = ({ children, marginValue }) => (
  <Container marginValue={marginValue}>{children}</Container>
);

export default ScrollContainer;
