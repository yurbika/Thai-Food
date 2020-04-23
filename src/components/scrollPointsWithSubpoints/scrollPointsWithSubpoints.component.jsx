import React from "react";

const ScrollPointsWithSubpoints = ({ lengthArr, namesArr }) => {
  return (
    <div>
      {console.log(
        lengthArr.map((item, index) => {
          if (item === 1) console.log(item, index);
        })
      )}
    </div>
  );
};

export default ScrollPointsWithSubpoints;
