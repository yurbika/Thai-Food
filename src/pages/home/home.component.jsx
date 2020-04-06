import React from "react";

//assets
import BigIcon from "../../assets/big-icon.svg";
import TriangleIcon from "../../assets/triangle.svg";

//styles
import "./home.styles.scss";

const Home = () => (
  <div className="container">
    <div className="background">
      <img src={TriangleIcon} alt="Logo" className="mirrored" />
      <img src={BigIcon} alt="Logo" />
      <img src={TriangleIcon} alt="Logo" />
    </div>
  </div>
);

export default Home;
