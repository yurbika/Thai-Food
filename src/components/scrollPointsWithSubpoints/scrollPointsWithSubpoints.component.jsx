import React from "react";

//utils
import ID_GENERATOR from "../../utils/uniqueKey";

//styles
import { Point, Container, Title } from "./scrollPointsWithSubpoints.styles";

const ScrollPointsWithSubpoints = ({ lengthArr, namesArr }) => {
  let counter = 0;
  return (
    <Container>
      {lengthArr.map((length, index) => {
        if (index === 0 && length === 1)
          return (
            <Title active key={ID_GENERATOR("title-points-")}>
              {console.log(counter)}
              {namesArr[index].toUpperCase()}
            </Title>
          );
        if (length === 1)
          return (
            <Title active key={ID_GENERATOR("title-points-")}>
              {console.log((counter = ++counter))}
              {namesArr[index].toUpperCase()}
            </Title>
          );
        else
          return (
            <div key={ID_GENERATOR("container-of-points-")}>
              <Title active key={ID_GENERATOR("title-of-points-")}>
                {console.log((counter = ++counter))}

                {namesArr[index].toUpperCase()}
              </Title>
              <div>
                {Array.from({ length: length }, (_, i) => {
                  console.log(i > 0 ? (counter += 1) : counter);
                  return <Point active key={ID_GENERATOR("points-")} />;
                })}
              </div>
            </div>
          );
      })}
    </Container>
  );
};

export default ScrollPointsWithSubpoints;
