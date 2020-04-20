import React from "react";

//utils
import ID_GENERATOR from "../../utils/uniqueKey";

//styles
import "./scrollPoints.styles.scss";

const ScrollPoints = ({ num = 4, fnc }) => {
  return (
    <div className="container">
      {Array.apply(null, new Array(num)).map((item, index) => {
        return (
          <span key={ID_GENERATOR("scroll-points-")} onClick={fnc(index)} />
        );
      })}
    </div>
  );
};

export default ScrollPoints;
