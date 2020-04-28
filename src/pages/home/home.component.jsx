import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { debounce } from "lodash";

//components
import Background from "../../components/background/background.component";

import ScrollPoints from "../../components/scrollPoints/scrollPoints.component";

import ScrollContainer from "../../components/scroll-container/scroll-container.component";
//redux
import { selectCounter } from "../../redux/home/home.selectors";
import { setCounter } from "../../redux/home/home.action";

import { selectFirstMount } from "../../redux/app/app.selectors";
import { setIsLoading } from "../../redux/app/app.action";

//assets
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

//utils
import theme from "../../utils/theme";

//styles
import {
  Container,
  SliderContainer,
  Slider,
  ImgContainer,
  ScrollPointsContainer,
} from "./home.styles";

class Home extends React.Component {
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

  handleSliderClasses = (n) => {
    if (this.props.counter !== n && this.props.counter === n - 1)
      return "fade-out fade-in-bottom";
    if (this.props.counter !== n) return "fade-out";
    return "fade-in";
  };

  handleAnimationClassesFirstSlider = (str) => {
    if (this.props.counter !== 0) {
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
    this.props.counter !== 1 ? "fade-plate-out" : "fade-plate-in";

  componentWillMount() {
    if (!this.props.firstMount) this.props.setIsLoading(true);
  }

  componentWillUnmount() {
    this.props.setCounter(0);
  }

  render() {
    return (
      <Container
        onWheel={this.debounceEvent(
          this.handleScroll,
          theme.animationTimes["500"]
        )}
      >
        <ScrollPointsContainer>
          <ScrollPoints num={4} />
        </ScrollPointsContainer>
        <Background className="background" />
        <ScrollContainer marginValue={100 * this.props.counter}>
          <SliderContainer active={this.props.counter === 0}>
            <Slider
              firstSlider
              className={this.handleSliderClasses(0)}
              tabIndex={0}
            >
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
          <SliderContainer active={this.props.counter === 1}>
            <Slider
              secondSlider
              className={this.handleSliderClasses(1)}
              tabIndex={0}
            >
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
          <SliderContainer homeThirdSlider active={this.props.counter === 2}>
            <Slider
              thirdSlider
              className={this.handleSliderClasses(2)}
              tabIndex={0}
            >
              <span>Direct supplies</span>
              <span>form the fines producers</span>
              <span>of thailand and the region</span>
            </Slider>
            <ImgContainer ingredients>
              <img src={Ingredients} alt="" />
            </ImgContainer>
          </SliderContainer>
          <SliderContainer active={this.props.counter === 3}>
            <Link to="/menu">
              <ImgContainer menu>
                <img src={Menu} alt="To the menu" />
              </ImgContainer>
            </Link>
          </SliderContainer>
        </ScrollContainer>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  counter: selectCounter,
  firstMount: selectFirstMount,
});

const mapDispatchToProps = (dispatch) => ({
  setCounter: (num) => dispatch(setCounter(num)),
  setIsLoading: (boolean) => dispatch(setIsLoading(boolean)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
