import React from "react";
import { connect } from "react-redux";

//redux
import { setMenuCounter } from "../../redux/menu/menu.action";

//utils
import ID_GENERATOR from "../../utils/uniqueKey";

//styles
import {
  Point,
  Container,
  Title,
  Button,
} from "./scrollPointsWithSubpoints.styles";

const ScrollPointsWithSubpoints = ({ lengthArr, namesArr, setMenuCounter }) => {
  let counter = 0;
  console.log("lengthArray", lengthArr);
  return (
    <Container>
      {lengthArr.map((length, index) => {
        console.log(length, "array");
        if (index === 0 && length === 1)
          return (
            <Button onClick={() => setMenuCounter(index)}>
              <Title active key={ID_GENERATOR("title-points-")}>
                {console.log(counter)}
                {namesArr[index].toUpperCase()}
              </Title>
            </Button>
          );
        if (length === 1)
          return (
            <Button onClick={() => setMenuCounter(index)}>
              <Title active key={ID_GENERATOR("title-points-")}>
                {console.log((counter = ++counter))}
                {namesArr[index].toUpperCase()}
              </Title>
            </Button>
          );
        else
          return (
            <div key={ID_GENERATOR("container-of-points-")}>
              <Button onClick={() => setMenuCounter(index)}>
                <Title active key={ID_GENERATOR("title-of-points-")}>
                  {console.log((counter = ++counter))}
                  {namesArr[index].toUpperCase()}
                </Title>
              </Button>
              <div>
                {Array.from({ length: length }, (_, i) => {
                  console.log(i > 0 ? (counter += 1) : counter);
                  return (
                    <Button>
                      <Point active key={ID_GENERATOR("points-")} />
                    </Button>
                  );
                })}
              </div>
            </div>
          );
      })}
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setMenuCounter: (num) => dispatch(setMenuCounter(num)),
});

export default connect(null, mapDispatchToProps)(ScrollPointsWithSubpoints);
