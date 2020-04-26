import React from "react";
import Background from "../../components/background/background.component";
import { debounce } from "lodash";

//components
import ScrollPointsWithSubpoints from "../../components/scrollPointsWithSubpoints/scrollPointsWithSubpoints.component";
import ScrollContainer from "../../components/scroll-container/scroll-container.component";

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
        Math.ceil(
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
    return (
      <Container>
        <Background className="background" />
        {/* <ScrollPointsContainer>
          <ScrollPointsWithSubpoints
            lengthArr={this.state.lengthArr}
            namesArr={this.state.namesArr}
          />
       </ScrollPointsContainer>*/}

        <ScrollContainer marginValue={0}>
          <SliderContainer>
            {this.state.namesArr.map((item, index) => (
              <Slider>
                <span>{item}</span>
                {Object.keys(this.state.food[index]).map((item, index) => (
                  <div>
                    <span>{item}</span>
                  </div>
                ))}
              </Slider>
            ))}
          </SliderContainer>
        </ScrollContainer>
      </Container>
    );
  }
}

export default Menu;
