import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { debounce, chunk } from "lodash";

//components
import ScrollPointsWithSubpoints from "../../components/scrollPointsWithSubpoints/scrollPointsWithSubpoints.component";
import ScrollContainer from "../../components/scroll-container/scroll-container.component";
import List from "../../components/list/list.component";
import Background from "../../components/background/background.component";

//redux
import { selectMenuCounter } from "../../redux/menu/menu.selectors";

//data
import MENU_DATA from "../../menu-data";

//styles
import { Container, ScrollPointsContainer, Slider } from "./menu.styles";
import { SliderContainer } from "../home/home.styles";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lengthArr: [],
      namesArr: [],
      food: [],
    };
  }

  debounceEvent(...args) {
    this.debouncedEvent = debounce(...args);
    return (e) => {
      e.persist();
      return this.debouncedEvent(e);
    };
  }

  handleScroll = (e) => {
    if (this.props.counter < 3 && e.deltaY > 0) {
      this.props.setCounter(this.props.counter + 1);
    } else if (this.props.counter > 0 && e.deltaY < 0) {
      this.props.setCounter(this.props.counter - 1);
    }
  };

  objectToChunkArray = (object, chunkValue) => {
    const objectToArray = Object.entries(object).map(([key, value]) => ({
      [key]: value,
    }));
    return chunk(objectToArray, chunkValue);
  };

  componentDidMount() {
    let tempLengthArr = [];
    let tempArrayWithNames = [];
    let tempFoodArray = [];
    MENU_DATA.map((item, index) => {
      tempArrayWithNames.push(Object.keys(item).toString());

      tempFoodArray.push(
        MENU_DATA[index][Object.keys(item).map((item) => item)]
      );
      tempLengthArr.push(
        Math.round(
          Object.keys(MENU_DATA[index][Object.keys(item).map((item) => item)])
            .length / 6
        )
      );
    });
    this.setState({
      lengthArr: tempLengthArr,
      namesArr: tempArrayWithNames,
      food: tempFoodArray,
    });
  }

  render() {
    const { counter } = this.props;
    return (
      <Container>
        <Background className="background" />
        <ScrollPointsContainer>
          <ScrollPointsWithSubpoints
            lengthArr={this.state.lengthArr}
            namesArr={this.state.namesArr}
          />
        </ScrollPointsContainer>

        {
          //dont forget about the marign value
        }
        <ScrollContainer marginValue={100 * counter}>
          {Array.from({ length: this.state.namesArr.length }, (_, index) => {
            let chunkedArray = this.objectToChunkArray(
              this.state.food[index],
              Object.keys(this.state.food[index]).length <= 8
                ? Object.keys(this.state.food[index]).length
                : Object.keys(this.state.food[index]).length / 2 + 1
            );
            return (
              <SliderContainer>
                <Slider>
                  <span>{this.state.namesArr[index]}</span>
                  <List chunkedArray={chunkedArray} />
                </Slider>
              </SliderContainer>
            );
          })}
        </ScrollContainer>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  counter: selectMenuCounter,
});

export default connect(mapStateToProps)(Menu);
