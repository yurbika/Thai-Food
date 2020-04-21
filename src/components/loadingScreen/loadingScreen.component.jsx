import React from "react";

//assets
import logoWalking from "../../assets/elephant.gif";
import BigIcon from "../../assets/big-icon-higherOpacity.svg";

//styles
import "./loadingScreen.styles.scss";
import { Container, ImgContainer, GIFContainer } from "./loadingScreen.styles";

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    setTimeout(() => this.setState({ isLoading: false }), 750);
  }

  render() {
    return (
      <Container isLoading={this.state.isLoading}>
        <ImgContainer>
          <img src={BigIcon} alt="" />
        </ImgContainer>
        <GIFContainer>
          <img src={logoWalking} alt="loading. . ." />
        </GIFContainer>
      </Container>
    );
  }
}

export default LoadingScreen;
