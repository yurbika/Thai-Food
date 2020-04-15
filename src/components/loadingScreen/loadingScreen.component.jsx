import React from "react";
import Lottie from "react-lottie";

//assets
import logoWalking from "../../assets/logoWalking.json";
import BigIcon from "../../assets/big-icon.svg";

//styles
import "./loadingScreen.styles.scss";

const LoadingScreen = () => {
  const defaultOptions = {
    animationData: logoWalking,
  };

  return (
    <div className="container">
      <div className="img-container">
        <img src={BigIcon} alt="" />
      </div>
      <div className="animation-container">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default LoadingScreen;
