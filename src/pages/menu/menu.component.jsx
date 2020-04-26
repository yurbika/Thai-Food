import React from "react";
import Background from "../../components/background/background.component";
import { debounce, chunk } from "lodash";

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
        Math.floor(
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
        {/*
          <ScrollPointsContainer>
            <ScrollPointsWithSubpoints
              lengthArr={this.state.lengthArr}
              namesArr={this.state.namesArr}
            />
          </ScrollPointsContainer>
          */}

        <ScrollContainer marginValue={0}>
          <SliderContainer>
            {Array.from({ length: this.state.namesArr.length }, (_, index) => {
              let arr = this.objectToChunkArray(
                this.state.food[index],
                Object.keys(this.state.food[index]).length <= 8
                  ? Object.keys(this.state.food[index]).length
                  : Object.keys(this.state.food[index]).length / 2 + 1
              );
              console.log(arr);
              return (
                <Slider>
                  <span>{this.state.namesArr[index]}</span>
                  {arr.map((item) => (
                    <div>
                      {item.map((food) =>
                        Object.keys(food).map((key) => (
                          <React.Fragment>
                            <span>{key}.</span>
                            <span>{food[key]["name"]}</span>
                            <span>{food[key]["additionalInfo"]}</span>
                            <span>
                              {Number(food[key]["price"]).toLocaleString(
                                "es-Es",
                                {
                                  minimumFractionDigits: 2,
                                }
                              ) + " "}
                              €
                            </span>
                          </React.Fragment>
                        ))
                      )}
                    </div>
                  ))}
                  {/*Object.keys(this.state.food[index]).map((item) => {
                    return (
                      <div>
                        <span>{item}.</span>
                        <span>{this.state.food[index][item]["name"]}</span>
                        <span>
                          {this.state.food[index][item]["additionalInfo"]}
                        </span>
                        <span>
                          {Number(
                            this.state.food[index][item]["price"]
                          ).toLocaleString("es-Es", {
                            minimumFractionDigits: 2,
                          }) + " "}
                          €
                        </span>
                      </div>
                    );
                  })*/}
                </Slider>
              );
            })}
            {/** */}
          </SliderContainer>
        </ScrollContainer>
      </Container>
    );
  }
}

export default Menu;
