import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//redux
import {
  setMenuCounter,
  setMenuSubCounter,
} from "../../redux/menu/menu.action";
import {
  selectMenuCounter,
  selectMenuSubCounter,
} from "../../redux/menu/menu.selectors";

//utils
import ID_GENERATOR from "../../utils/uniqueKey";

//styles
import {
  Point,
  Container,
  Title,
  Button,
  PointsWrapper,
} from "./scrollPointsWithSubpoints.styles";

const ScrollPointsWithSubpoints = ({
  lengthArr,
  namesArr,
  setMenuCounter,
  setMenuSubCounter,
  counter,
  subcounter,
}) => {
  return (
    <Container tabIndex={0} aria-label={"Slider"}>
      {lengthArr.map((length, index) => {
        if (index === 0 && length === 1)
          return (
            <Button
              onClick={() => {
                setMenuCounter(index);
                setMenuSubCounter(0);
              }}
              key={ID_GENERATOR("subpoints-button-")}
            >
              <Title
                active={index === counter}
                aria-label={
                  index === counter
                    ? namesArr[index] + " is current slider"
                    : null
                }
                key={ID_GENERATOR("title-points-")}
              >
                {namesArr[index].toUpperCase()}
              </Title>
            </Button>
          );
        if (length === 1)
          return (
            <Button
              onClick={() => {
                setMenuCounter(index);
                setMenuSubCounter(0);
              }}
              key={ID_GENERATOR("subpoints-button-")}
            >
              <Title
                active={index === counter}
                key={ID_GENERATOR("title-points-")}
                aria-label={
                  index === counter
                    ? namesArr[index] + " is current slider"
                    : null
                }
              >
                {namesArr[index].toUpperCase()}
              </Title>
            </Button>
          );
        else
          return (
            <div key={ID_GENERATOR("container-of-points-")}>
              <Button
                onClick={() => {
                  setMenuCounter(index);
                  setMenuSubCounter(0);
                }}
                key={ID_GENERATOR("subpoints-button-")}
              >
                <Title
                  active={index === counter}
                  key={ID_GENERATOR("title-of-points-")}
                  aria-label={
                    index === counter
                      ? namesArr[index] + " is current slider"
                      : null
                  }
                >
                  {namesArr[index].toUpperCase()}
                </Title>
              </Button>
              <PointsWrapper active={index === counter}>
                {Array.from({ length: length }, (_, i) => {
                  return (
                    <Button
                      onClick={() => setMenuSubCounter(i)}
                      key={ID_GENERATOR("subpoints-button-")}
                    >
                      <Point
                        active={i === subcounter}
                        key={ID_GENERATOR("points-")}
                        aria-label={
                          i === subcounter
                            ? namesArr[index] +
                              " is current slider," +
                              " page " +
                              i +
                              " is selected"
                            : "Select page" + i + "  of " + namesArr[index]
                        }
                      />
                    </Button>
                  );
                })}
              </PointsWrapper>
            </div>
          );
      })}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  counter: selectMenuCounter,
  subcounter: selectMenuSubCounter,
});

const mapDispatchToProps = (dispatch) => ({
  setMenuCounter: (num) => dispatch(setMenuCounter(num)),
  setMenuSubCounter: (num) => dispatch(setMenuSubCounter(num)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScrollPointsWithSubpoints);
