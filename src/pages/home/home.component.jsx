import React from "react";

//assets
import BigIcon from "../../assets/big-icon.svg";
import TriangleIcon from "../../assets/triangle.svg";

//styles
import "./home.styles.scss";

const Home = () => (
  <div className="container">
    <div className="background">
      <div className="triangle-container left">
        <img src={TriangleIcon} alt="Logo" className="mirrored triangle" />
      </div>
      <div className="img-container">
        <img src={BigIcon} alt="Logo" />
      </div>
      <div className="triangle-container">
        <img src={TriangleIcon} alt="Logo" className="triangle" />
      </div>
    </div>
  </div>
);

export default Home;
