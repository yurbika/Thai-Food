import React from "react";
import { Link } from "react-router-dom";
import LoadingScreen from "../../components/loadingScreen/loadingScreen.component";

import { Container, Span } from "./error.styles";

const ErrorPage = () => (
  <Container>
    <Span>
      You are lost, but if you click on the elephant he brings you back!
    </Span>
    <Link
      to="/"
      aria-label="You are lost, but if you click this link, which is by the way a walking elephant, it brings you back!"
    >
      <LoadingScreen />
    </Link>
  </Container>
);
export default ErrorPage;
