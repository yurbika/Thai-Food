import React from "react";

//assets
import logoWalking from "../../assets/elefant.gif";
import BigIcon from "../../assets/big-icon-higherOpacity.svg";

//styles
import "./loadingScreen.styles.scss";

const LoadingScreen = () => {
  return (
    <div className="container">
      <div className="img-container">
        <img src={BigIcon} alt="" />
      </div>
      <div className="animation-container">
        <img src={logoWalking} alt="loading. . ." />
      </div>
    </div>
  );
};

export default LoadingScreen;
