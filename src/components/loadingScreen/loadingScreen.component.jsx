import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//redux
import { setIsLoading } from "../../redux/app/app.action";
import { selectIsLoading } from "../../redux/app/app.selectors";

//assets
import logoWalking from "../../assets/elephant.gif";
import BigIcon from "../../assets/big-icon-higherOpacity.svg";

//styles
import "./loadingScreen.styles.scss";
import { Container, ImgContainer, GIFContainer } from "./loadingScreen.styles";

class LoadingScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => this.props.setIsLoading(false), 750);
  }

  render() {
    return (
      <Container isLoading={this.props.isLoading}>
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

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setIsLoading: (boolean) => dispatch(setIsLoading(boolean)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);
