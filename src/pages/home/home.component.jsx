import React from "react";

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
      counter: 1,
    };
  }

  componentDidUpdate() {
    if (this.state.scroll) {
      setTimeout(() => {
        this.setState({ scroll: false });
      }, 300);
    }
  }

  render() {
    return (
      <Container
        onWheel={(e) => {
          if (!this.state.scroll) {
            this.setState({ scroll: true });
            if (this.state.counter < 4 && e.deltaY > 0) {
              this.setState({ counter: ++this.state.counter });
            } else if (this.state.counter > 0 && e.deltaY < 0)
              this.setState({ counter: --this.state.counter });
            console.log(this.state.counter);
          }
        }}
      >
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
        <div className="scroll-container">
          <div
            className={
              "text-container " +
              (this.state.scroll && this.state.counter !== 1 ? "fade-out" : "")
            }
          >
            <span>The Original</span>
            <span>Thai Food</span>
            <span>
              Get your original thai menu <br></br>- traditional family recipe
            </span>
          </div>
          <div>
            <span>hello</span>
          </div>
        </div>
      </Container>
    );
  }
}

export default Home;
