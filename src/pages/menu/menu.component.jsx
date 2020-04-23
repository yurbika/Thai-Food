import React from "react";
import Background from "../../components/background/background.component";
import { debounce } from "lodash";

//components
import ScrollPointsWithSubpoints from "../../components/scrollPointsWithSubpoints/scrollPointsWithSubpoints.component";

//data
import MENU_DATA from "../../menu-data";

//styles
import { Container, ScrollPointsContainer } from "./menu.styles";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lengthArr: [],
      namesArr: [],
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
    MENU_DATA.map((item, index) => {
      //name

      tempArrayWithNames.push(Object.keys(item).toString());

      // console.log(
      //   "inhalt:",
      //   MENU_DATA[index][Object.keys(item).map((item) => item)]
      // );
      // console.log(
      //   "länge:",
      //   Math.ceil(
      //     Object.keys(
      //       MENU_DATA[index][Object.keys(item).map((item) => item)]
      //     ).length / 8
      //   ),
      //   Object.keys(MENU_DATA[index][Object.keys(item).map((item) => item)])
      //     .length
      // );
      tempLengthArr.push(
        Math.ceil(
          Object.keys(MENU_DATA[index][Object.keys(item).map((item) => item)])
            .length / 8
        )
      );
    });
    this.setState({ lengthArr: tempLengthArr, namesArr: tempArrayWithNames });
  }

  render() {
    return (
      <Container>
        <Background className="background" />
        <ScrollPointsContainer>
          <ScrollPointsWithSubpoints
            lengthArr={this.state.lengthArr}
            namesArr={this.state.namesArr}
          />
        </ScrollPointsContainer>
      </Container>
    );
  }
}

export default Menu;
