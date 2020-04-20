import React from "react";
import Background from "../../components/background/background.component";
import { debounce } from "lodash";

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
    return (
      <Container>
        <Background className="background" />
      </Container>
    );
  }
}

export default Menu;
