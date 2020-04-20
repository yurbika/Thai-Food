import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//redux
import { selectCounter } from "../../redux/home/home.selectors";
import { setCounter } from "../../redux/home/home.action";

//utils
import ID_GENERATOR from "../../utils/uniqueKey";

//styles
import { Container, Point } from "./scrollPoints.styles";

const ScrollPoints = ({ num = 4, counter, setCounter }) => {
  return (
    <Container>
      {Array.apply(null, new Array(num)).map((item, index) => {
        return (
          <Point
            active={counter === index}
            key={ID_GENERATOR("scroll-points-")}
            onClick={() => setCounter(index)}
          />
        );
      })}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({ counter: selectCounter });

const mapDispatchToProps = (dispatch) => ({
  setCounter: (num) => dispatch(setCounter(num)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScrollPoints);
