import React from "react";
import { debounce } from "lodash";
//components
import Background from "../../components/background/background.component";
import Button from "../../components/button/button.component";

import Leaf from "../../assets/home/first-page/leaf.svg";
import Menu from "../../assets/home/third-page/menu.svg";

//styles
import {
  Container,
  ScrollContainer,
  SliderContainer,
  Slider,
  ImgContainer,
} from "./home.styles";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
        <ScrollContainer className={`translate-${this.state.counter}`}>
          <SliderContainer>
            <Slider
              firstSlider
              className={
                this.state.counter > 0
                  ? "fade-out"
                  : !this.state.scrollDirection
                  ? "fade-in"
                  : ""
              }
            >
              <span>The Original</span>
              <span>Thai Food</span>
              <span>
                Get your original thai menu <br></br>- traditional family recipe
              </span>
              <ImgContainer
                topLeaf
                className={
                  this.state.counter > 0
                    ? "fade-leaf-out"
                    : !this.state.scrollDirection
                    ? "fade-leaf-in"
                    : ""
                }
              >
                <img src={Leaf} alt="" />
              </ImgContainer>
            </Slider>
          </SliderContainer>
          <SliderContainer>
            <Slider secondSlider>
              <span>Menu</span>
              <span>created by</span>
              <span>chefs that are specialized</span>
              <span>in thai food</span>
            </Slider>
          </SliderContainer>
          <SliderContainer>
            <Slider>
              <span>Direct supplies</span>
              <span>form the fines producers</span>
              <span>of thailand and the region</span>
            </Slider>
          </SliderContainer>
          <SliderContainer>
            <ImgContainer menu>
              <img src={Menu} alt="" />
            </ImgContainer>
          </SliderContainer>
        </ScrollContainer>
      </Container>
    );
  }
}

export default Home;
