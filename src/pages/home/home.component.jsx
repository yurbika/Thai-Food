import React from "react";
import { debounce } from "lodash";
//components
import Background from "../../components/background/background.component";
import Button from "../../components/button/button.component";

//styles
import { Container } from "./home.styles";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll: false,
      counter: 0,
      scrollDirection: null,
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
    if (this.state.counter < 3 && e.deltaY > 0) {
      this.setState({ counter: this.state.counter + 1 });
      this.setState({ scrollDirection: true });
    } else if (this.state.counter > 0 && e.deltaY < 0) {
      this.setState({ counter: this.state.counter - 1 });
      this.setState({ scrollDirection: false });
    }
  };

  render() {
    return (
      <Container onWheel={this.debounceEvent(this.handleScroll, 300)}>
        <Background className="background" />
        <Button
          onClick={() => {
            if (
              !document
                .getElementById("menu-item")
                .classList.contains("animate")
            ) {
              document.getElementById("menu-item").classList.add("animate");
            } else {
              document.getElementById("menu-item").classList.remove("animate");
            }
          }}
        />
        <Button logo />
        <div
          className={"scroll-container " + `translate-${this.state.counter}`}
        >
          <div className="text-container-container">
            <div
              className={
                "text-container " +
                (this.state.counter > 0
                  ? "fade-out"
                  : !this.state.scrollDirection
                  ? "fade-in"
                  : "")
              }
            >
              <span>The Original</span>
              <span>Thai Food</span>
              <span>
                Get your original thai menu <br></br>- traditional family recipe
              </span>
            </div>
          </div>
          <div className="test">
            <span>hello 1</span>
          </div>
          <div>
            <span>hello 2</span>
          </div>
          <div>
            <span>hello 3</span>
          </div>
        </div>
      </Container>
    );
  }
}

export default Home;
