import React from "react";

//utils
import ID_GENERATOR from "../../utils/uniqueKey";

//styles
import { Point, Container } from "./styles";

const ScrollPointsWithSubpoints = ({ lengthArr, namesArr }) => {
  return (
    <Container>
      {lengthArr.map((length, index) => {
        if (length === 1)
          return (
            <span key={ID_GENERATOR("title-points-")}>
              {namesArr[index].toUpperCase()}
            </span>
          );
        else
          return (
            <div key={ID_GENERATOR("container-of-points-")}>
              <span key={ID_GENERATOR("title-of-points-")}>
                {namesArr[index].toUpperCase()}
              </span>
              <div>
                {Array.from({ length: length }, () => {
                  return <Point key={ID_GENERATOR("points-")} />;
                })}
              </div>
            </div>
          );
      })}
    </Container>
  );
};

export default ScrollPointsWithSubpoints;
