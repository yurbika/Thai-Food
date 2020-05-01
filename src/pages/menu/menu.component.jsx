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
import {
  selectMenuCounter,
  selectMenuSubCounter,
} from "../../redux/menu/menu.selectors";

import {
  setMenuCounter,
  setMenuSubCounter,
} from "../../redux/menu/menu.action";

//utils
import ID_GENERATOR from "../../utils/uniqueKey";
import filterData from "../../menu-data/menu-data.utils";
import theme from "../../utils/theme";

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
      sliderContentSize:
        window.innerWidth <= 320
          ? 3
          : window.innerWidth <= 360
          ? 4
          : window.innerWidth <= 992 && window.innerHeight <= 450
          ? 3
          : 6,
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
    if (
      (this.props.counter < this.state.namesArr.length - 1 ||
        this.props.subcounter !==
          this.state.sliderCountArr[this.props.counter] - 1) &&
      e.deltaY > 0
    ) {
      if (
        this.props.subcounter ===
        this.state.sliderCountArr[this.props.counter] - 1
      ) {
        this.props.setMenuCounter(this.props.counter + 1);
        this.props.setMenuSubCounter(0);
      } else this.props.setMenuSubCounter(this.props.subcounter + 1);
    } else if (
      (this.props.counter > 0 || this.props.subcounter !== 0) &&
      e.deltaY < 0
    ) {
      if (this.props.subcounter === 0) {
        this.props.setMenuCounter(this.props.counter - 1);
        this.props.setMenuSubCounter(
          this.state.sliderCountArr[this.props.counter] - 1
        );
      } else this.props.setMenuSubCounter(this.props.subcounter - 1);
    }
  };

  handleResize = () => {
    this.setState({
      sliderContentSize:
        window.innerWidth <= 320
          ? 3
          : window.innerWidth <= 360
          ? 4
          : window.innerWidth <= 992 && window.innerHeight <= 450
          ? 3
          : 6,
    });

    this.setState({
      sliderCountArr: filterData().sliderCount,
    });
  };

  handleSliderClasses = (n) => {
    console.log(n);
    if (this.props.counter !== n && this.props.counter === n - 1)
      return "fade-out fade-in-bottom";
    if (this.props.counter !== n) return "fade-out";
    return "fade-in";
  };

  objectToChunkArray = (object, chunkValue) => {
    const objectToArray = Object.entries(object).map(([key, value]) => ({
      [key]: value,
    }));
    return chunk(objectToArray, chunkValue);
  };

  ////////////////////////
  ///////life cycle///////
  ////////////////////////

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);

    this.setState({
      sliderCountArr: filterData().sliderCount,
      namesArr: filterData().namesArr,
      food: filterData().foodArr,
    });
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.subcounter !== nextProps.subcounter) return false;
    else return true;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    const { setMenuCounter, setMenuSubCounter } = this.props;

    setMenuSubCounter(0);
    setMenuCounter(0);
  }

  render() {
    const { counter } = this.props;
    return (
      <Container
        onWheel={this.debounceEvent(
          this.handleScroll,
          theme.animationTimes["500"]
        )}
      >
        <Background className="background" />
        <ScrollPointsContainer>
          <ScrollPointsWithSubpoints
            sliderCountArr={this.state.sliderCountArr}
            namesArr={this.state.namesArr}
          />
        </ScrollPointsContainer>
        <ScrollContainer marginValue={100 * counter}>
          {
            //names of the data are the keys so namesArr.length already contains how many sliders should appear
            Array.from({ length: this.state.namesArr.length }, (_, index) => {
              //each page should contain only x amount of items if its bigger than chunk it
              let chunkedArray = this.objectToChunkArray(
                this.state.food[index],
                Object.keys(this.state.food[index]).length <=
                  this.state.sliderContentSize
                  ? Object.keys(this.state.food[index]).length
                  : Object.keys(this.state.food[index]).length /
                      (Object.keys(this.state.food[index]).length /
                        this.state.sliderContentSize)
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
  subcounter: selectMenuSubCounter,
});

const mapDispatchToProps = (dispatch) => ({
  setMenuCounter: (num) => dispatch(setMenuCounter(num)),
  setMenuSubCounter: (num) => dispatch(setMenuSubCounter(num)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
