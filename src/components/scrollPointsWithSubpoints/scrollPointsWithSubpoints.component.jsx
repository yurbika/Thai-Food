import React from "react";

//utils
import ID_GENERATOR from "../../utils/uniqueKey";

//styles
import { Point, Container, Title } from "./scrollPointsWithSubpoints.styles";

const ScrollPointsWithSubpoints = ({ lengthArr, namesArr }) => {
  var counter = 0;
  const giveRightPos = (arr, index, curPos = 0, posNum = 0) => {
    console.log(curPos, posNum);
    if (index >= arr.length) return;
    if (index === 0) return posNum;
    if (lengthArr[curPos] === 0) ++curPos;
    posNum++;
    lengthArr[curPos] = --lengthArr[curPos];
    giveRightPos(lengthArr, index - 1, curPos, posNum);
  };

  //  console.log(giveRightPos(lengthArr, 1));

  return (
    <Container>
      {lengthArr.map((length, index) => {
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
                  console.log((counter += i));
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
