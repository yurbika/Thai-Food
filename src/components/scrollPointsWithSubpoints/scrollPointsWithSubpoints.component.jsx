import React from "react";

const ScrollPointsWithSubpoints = ({ lengthArr, namesArr }) => {
  return (
    <div>
      {lengthArr.map((item, index) => {
        if (item === 1) return <div>{namesArr[index]}</div>;
        else return;
      })}
    </div>
  );
};

export default ScrollPointsWithSubpoints;
