import React from "react";
import { withRouter } from "react-router-dom";
import { debounce } from "lodash";
//components
import Background from "../../components/background/background.component";
import Button from "../../components/button/button.component";

//first slider
import Leaf from "../../assets/home/first-page/leaf.svg";
import Chilli from "../../assets/home/first-page/chilli.svg";
import Lemon from "../../assets/home/first-page/lemon.svg";
import Tomato from "../../assets/home/first-page/tomato.svg";
import Basil from "../../assets/home/first-page/basil.svg";

//second slider
import SpaghettiPlate from "../../assets/home/second-page/spaghettiPlate.svg";
import SpaghettiPlate2 from "../../assets/home/second-page/spaghettiPlate2.svg";
import SpaghettiPlate3 from "../../assets/home/second-page/spaghettiPlate3.svg";
import SpaghettiPlate4 from "../../assets/home/second-page/spaghettiPlate4.svg";
import Soup from "../../assets/home/second-page/soup.svg";
import Soup2 from "../../assets/home/second-page/soup2.svg";

//third slider
import Ingredients from "../../assets/home/third-page/ingredients.svg";

//last slider
import Menu from "../../assets/home/fourth-page/menu.svg";

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
      scrollDirection: true,
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

  handleSliderClasses = (n) => {
    if (this.state.counter !== n && this.state.counter === n - 1)
      return "fade-out fade-in-bottom";
    if (this.state.counter !== n) return "fade-out";
    return "fade-in";
  };

  handleAnimationClassesFirstSlider = (str) => {
    if (this.state.counter !== 0) {
      if (str === "leaf") return "fade-leaf-out";
      if (str === "lemon") return "fade-lemon-out";
      if (str === "chilli" || str === "basil") return "fade-chilli-out";
    } else {
      if (str === "leaf") return "fade-leaf-in";
      if (str === "lemon") return "fade-lemon-in";
      if (str === "chilli" || str === "basil") return "fade-chilli-in";
    }
    return "";
  };

  handleAnimationclassesSecondSlider = () =>
    this.state.counter !== 1 ? "fade-plate-out" : "fade-plate-in";

  render() {
    const { history } = this.props;
    return (
      <Container onWheel={this.debounceEvent(this.handleScroll, 500)}>
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
            <Slider firstSlider className={this.handleSliderClasses(0)}>
              <span>The Original</span>
              <span>Thai Food</span>
              <span>
                Get your original thai menu <br></br>- traditional family recipe
              </span>
            </Slider>
            <ImgContainer
              topLeaf
              className={this.handleAnimationClassesFirstSlider("leaf")}
            >
              <img src={Leaf} alt="" />
            </ImgContainer>
            <ImgContainer
              lemon
              className={this.handleAnimationClassesFirstSlider("lemon")}
            >
              <img src={Lemon} alt="" />
            </ImgContainer>
            <ImgContainer
              bottomLeftLeaf
              className={this.handleAnimationClassesFirstSlider("leaf")}
            >
              <img src={Leaf} alt="" />
              <img src={Chilli} alt="" />
              <img src={Chilli} alt="" />
            </ImgContainer>
            <ImgContainer
              bottomChilli
              className={this.handleAnimationClassesFirstSlider("chilli")}
            >
              <img src={Chilli} alt="" />
            </ImgContainer>
            <ImgContainer
              bottomRightLeaf
              className={this.handleAnimationClassesFirstSlider("leaf")}
            >
              <img src={Leaf} alt="" />
              <img src={Tomato} alt="" />
              <img src={Tomato} alt="" />
            </ImgContainer>
            <ImgContainer
              basil
              className={this.handleAnimationClassesFirstSlider("chilli")}
            >
              <img src={Basil} alt="" />
            </ImgContainer>
          </SliderContainer>
          <SliderContainer>
            <Slider secondSlider className={this.handleSliderClasses(1)}>
              <span>Menu created by</span>
              <span>chefs that are specialized</span>
              <span>in thai food</span>
            </Slider>
            <ImgContainer
              leftTopPlate
              className={this.handleAnimationclassesSecondSlider()}
            >
              <img src={SpaghettiPlate} alt="" />
            </ImgContainer>
            <ImgContainer
              leftMiddlePlate
              delay={50}
              className={this.handleAnimationclassesSecondSlider()}
            >
              <img src={SpaghettiPlate2} alt="" />
            </ImgContainer>
            <ImgContainer
              leftBottomPlate
              delay={100}
              className={this.handleAnimationclassesSecondSlider()}
            >
              <img src={SpaghettiPlate3} alt="" />
            </ImgContainer>
            <ImgContainer
              rightBottomPlate
              delay={150}
              x={"10vw"}
              y={"25vh"}
              className={this.handleAnimationclassesSecondSlider()}
            >
              <img src={SpaghettiPlate4} alt="" />
            </ImgContainer>
            <ImgContainer
              rightMiddlePlate
              delay={200}
              x={"10vw"}
              y={"25vh"}
              className={this.handleAnimationclassesSecondSlider()}
            >
              <img src={Soup} alt="" />
            </ImgContainer>
            <ImgContainer
              rightTopPlate
              delay={250}
              x={"10vw"}
              y={"25vh"}
              className={this.handleAnimationclassesSecondSlider()}
            >
              <img src={Soup2} alt="" />
            </ImgContainer>
          </SliderContainer>

          <SliderContainer homeThirdSlider>
            <Slider thirdSlider className={this.handleSliderClasses(2)}>
              <span>Direct supplies</span>
              <span>form the fines producers</span>
              <span>of thailand and the region</span>
            </Slider>
            <ImgContainer ingredients>
              <img src={Ingredients} alt="" />
            </ImgContainer>
          </SliderContainer>
          <SliderContainer>
            <ImgContainer menu>
              <img src={Menu} alt="" onClick={() => history.push("/menu")} />
            </ImgContainer>
          </SliderContainer>
        </ScrollContainer>
      </Container>
    );
  }
}

export default withRouter(Home);
