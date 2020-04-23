import React from "react";
import Background from "../../components/background/background.component";
import { debounce } from "lodash";

//data
import MENU_DATA from "../../menu-data";

//styles
import { Container } from "./menu.styles";

class Menu extends React.Component {
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

  render() {
    console.log("-------------------------------------------");
    return (
      <Container>
        <Background className="background" />

        {MENU_DATA.map((item, index) => {
          //name
          console.log("name:", Object.keys(item).toString());
          console.log(
            "inhalt:",
            MENU_DATA[index][Object.keys(item).map((item) => item)]
          );
          console.log(
            "länge:",
            Math.ceil(
              Object.keys(
                MENU_DATA[index][Object.keys(item).map((item) => item)]
              ).length / 8
            ),
            Object.keys(MENU_DATA[index][Object.keys(item).map((item) => item)])
              .length
          );
        })}
      </Container>
    );
  }
}

export default Menu;
