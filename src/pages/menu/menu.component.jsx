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

//utils
import ID_GENERATOR from "../../utils/uniqueKey";

//data
import MENU_DATA from "../../menu-data";

//styles
import {
  Container,
  ScrollPointsContainer,
  Slider,
  Content,
  FoodName,
} from "./menu.styles";
import { SliderContainer } from "../home/home.styles";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //how many slider should appear for each data
      sliderCountArr: [],
      // food names
      namesArr: [],
      //corrosponding menu
      food: [],
    };
  }

  //debounces mouse scroll event
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
    let tempsliderCountArr = [];
    let tempArrayWithNames = [];
    let tempFoodArray = [];
    MENU_DATA.map((item, index) => {
      //gets the names
      tempArrayWithNames.push(Object.keys(item).toString());
      //gets the menu
      tempFoodArray.push(
        MENU_DATA[index][Object.keys(item).map((item) => item)]
      );
      //gets the slider count
      tempsliderCountArr.push(
        Math.ceil(
          Object.keys(MENU_DATA[index][Object.keys(item).map((item) => item)])
            .length / 6
        )
      );
      return 0;
    });
    this.setState({
      sliderCountArr: tempsliderCountArr,
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
            sliderCountArr={this.state.sliderCountArr}
            namesArr={this.state.namesArr}
          />
        </ScrollPointsContainer>
        <ScrollContainer marginValue={100 * counter}>
          {
            //names of the data are the keys so namesArr.length already contains how many sliders it should appear
            Array.from({ length: this.state.namesArr.length }, (_, index) => {
              //each page should contain only 6 items if its bigger than chunk it
              let chunkedArray = this.objectToChunkArray(
                this.state.food[index],
                Object.keys(this.state.food[index]).length <= 6
                  ? Object.keys(this.state.food[index]).length
                  : Object.keys(this.state.food[index]).length /
                      (Object.keys(this.state.food[index]).length / 6)
              );
              return (
                <SliderContainer
                  active={index === counter}
                  key={ID_GENERATOR("menu-slider-container-")}
                >
                  <Slider key={ID_GENERATOR("menu-slider-")}>
                    <Content key={ID_GENERATOR("menu-content-wrapper-")}>
                      <FoodName key={ID_GENERATOR("menu-food-section-")}>
                        {this.state.namesArr[index].toUpperCase()}
                      </FoodName>
                      <List
                        chunkedArray={chunkedArray}
                        key={ID_GENERATOR("menu-food-section-list-")}
                      />
                    </Content>
                  </Slider>
                </SliderContainer>
              );
            })
          }
        </ScrollContainer>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  counter: selectMenuCounter,
});

export default connect(mapStateToProps)(Menu);
