import styled, { css, keyframes } from "styled-components";

//keyframe functions
const rollInHorizontal = (x = "-10vw") => keyframes`
0% {
  opacity: 0;
  transform: translateX(${x}) rotate(360deg);
}
100% {
  opacity: 1;
  transform: translateX(0) rotate(0deg);
}
`;

const rollOutHorizontal = (x = "-10vw") => keyframes`
  0% {
    opacity: 1;
    transform: translateX(0px) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translateX(${x}) rotate(360deg);
  }
`;

const rollInVertical = (y = "-25vh") => keyframes`
0% {
  opacity: 0;
  transform: translateY(${y}) rotate(360deg);
}
100% {
  opacity: 1;
  transform: translateY(0) rotate(0deg);
}
`;

const rollOutVertical = (y = "-25vh") => keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translateY(${y}) rotate(360deg);
  }
`;

export const Container = styled.div`
  position: fixed;
  overflow: hidden;
  height: 100vh;

  .background {
    position: absolute;
    z-index: -2;
  }

  //slider fade out/in
  .fade-out {
    visibility: hidden;
    transform: translateY(-2vh);
    opacity: 0;
    transition: transform 100ms ease-out, opacity 250ms ease-out,
      visibility 260ms ease;
  }

  .fade-in {
    visibility: visible;
    transform: none;
    opacity: 1;
    transition: transform 100ms ease-out 450ms, opacity 250ms ease 450ms;
  }

  /*-------------first-slider-------------*/
  .fade-leaf-out img {
    transition: all 250ms ease-out;
    margin-top: -25vh;
    visibility: hidden;
  }

  .fade-leaf-in img {
    transition: all 120ms ease 100ms;
    margin-top: 0;
    visibility: visible;
  }

  /*---------------------------*/
  .fade-chilli-out img {
    transition: all 250ms ease-out;
    margin-bottom: -25vh;
    visibility: hidden;
  }

  .fade-chilli-in img {
    transition: all 220ms ease 220ms;
    margin-top: 0;
    visibility: visible;
  }

  /*---------------------------*/
  @keyframes rollOutDiagonal {
    0% {
      opacity: 1;
      transform: translateX(0px) translateY(0px) rotate(0deg);
    }
    100% {
      opacity: 0;
      transform: translateX(10vw) translateY(-25vh) rotate(720deg);
    }
  }

  @keyframes rollInDiagonal {
    0% {
      opacity: 0;
      transform: translateX(10vw) translateY(-25vh) rotate(720deg);
    }
    100% {
      opacity: 1;
      transform: translateX(0px) translateY(0px) rotate(0deg);
    }
  }

  .fade-lemon-out img {
    -webkit-animation-duration: 250ms;
    animation-duration: 250ms;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: rollOutDiagonal;
    animation-name: rollOutDiagonal;
    transition: all 250ms ease-out;
    visibility: hidden;
  }

  .fade-lemon-in img {
    -webkit-animation-duration: 250ms;
    animation-duration: 250ms;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: rollInDiagonal;
    animation-name: rollInDiagonal;
    transition: all 250ms ease-out;
    visibility: visible;
  }
  /*----------third-slider----------------*/

  .fade-ingredients-out img {
    visibility: hidden;
    transform: translateY(-2vh);
    opacity: 0;
    transition: transform 150ms ease-out, opacity 250ms ease-out,
      visibility 260ms ease;
  }

  .fade-ingredients-in img {
    visibility: visible;
    transform: none;
    opacity: 1;
    transition: transform 450ms ease-out, opacity 500ms ease;
  }
`;

export const ScrollContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 500ms ease-in-out;
  opacity: 1;

  & > * {
    width: 100vw;
    height: 100vh;
  }

  &.translate-1 {
    margin-top: -100vh;
  }

  &.translate-2 {
    margin-top: -200vh;
  }

  &.translate-3 {
    margin-top: -300vh;
  }
`;

const getAdditionalStyleSliderContainer = (props) => {
  if (props.homeThirdSlider)
    return css`
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 768px) {
        display: unset;
      }
    `;
};

export const SliderContainer = styled.div`
  position: relative;

  ${getAdditionalStyleSliderContainer};
`;

const getAdditionalSliderStyles = (props) => {
  if (props.firstSlider)
    return css`
      & :nth-child(1),
      & :nth-child(2),
      & :nth-child(3),
      & :nth-child(4) {
        z-index: 1;
      }

      & :nth-child(1) {
        margin-left: -20vw;
      }

      & :nth-child(2) {
        margin-left: 25vw;
      }

      & :nth-child(1),
      & :nth-child(2) {
        font-weight: bold;
        font-size: 5vw;
      }

      & :nth-child(3),
      & :nth-child(4) {
        margin-top: 15px;
        font-weight: bold;
        font-size: 2vw;
      }

      @media (max-width: 768px) {
        & :nth-child(1),
        & :nth-child(2),
        & :nth-child(3),
        & :nth-child(4) {
          margin: unset;
        }

        & :nth-child(1),
        & :nth-child(2) {
          font-size: calc(45px + 1vw);
        }

        & :nth-child(3),
        & :nth-child(4) {
          margin-top: 20px;
          font-size: calc(18px + 1vw);
        }
      }
    `;
  if (props.secondSlider)
    return css`
      font-weight: bold;
      font-size: 3vw;
      opacity: 0;

      &.fade-in-bottom {
        transform: translateY(5vh);
      }

      & > * {
        margin-bottom: 15px;
      }

      @media (max-width: 768px) {
        font-size: 7vw;

        & > * {
          margin-bottom: 15px;
        }
      }
    `;
  if (props.thirdSlider)
    return css`
      width: 100%;
      height: 100%;

      font-size: 2.5vw;
      font-weight: bold;
      &.fade-in-bottom {
        transform: translateY(5vh);
      }
      @media (max-width: 768px) {
        font-size: calc(20px + 1vw);
      }
    `;
};

export const Slider = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  span {
    pointer-events: none;
    z-index: 1;
  }

  ${getAdditionalSliderStyles}
`;

const getAdditionalStyleImgContainer = (props) => {
  //first slider
  if (props.topLeaf)
    return css`
      right: 75px;
      top: -75px;
      height: 250px;
      width: 250px;
      .fade-leaf-in {
        margin-top: -50vh;
      }
      @media (max-width: 768px) {
        right: 1vw;
        top: -35px;
        height: 150px;
        width: 150px;
      }
    `;
  if (props.bottomLeftLeaf)
    return css`
      bottom: -300px;
      left: -250px;
      transform-origin: 50% 0;
      transform: rotateZ(-90deg) scaleX(-1);
      height: 350px;
      width: 350px;
      & :nth-child(2),
      & :nth-child(3) {
        position: absolute;
        transform: rotateZ(-200deg) scaleX(-1);
        top: 260px;
        left: 80px;
        height: 100px;
        width: 100px;
      }
      & :nth-child(2) {
        left: 35px;
        top: 265px;
        transform: rotateZ(-160deg) scaleX(-1);
      }
      @media (max-width: 768px) {
        bottom: -200px;
        left: -250px;

        height: 250px;
        width: 250px;

        & :nth-child(2),
        & :nth-child(3) {
          position: absolute;
          transform: rotateZ(-200deg) scaleX(-1);
          top: 180px;
          left: 65px;
          height: 65px;
          width: 65px;
        }
        & :nth-child(2) {
          left: 35px;
          top: 195px;
          transform: rotateZ(-160deg) scaleX(-1);
        }
      }
    `;
  if (props.bottomRightLeaf)
    return css`
      bottom: -350px;
      right: -150px;
      transform-origin: 50% 0;
      transform: rotateZ(135deg);
      height: 300px;
      width: 300px;

      & :nth-child(2),
      & :nth-child(3) {
        position: absolute;
        transform: rotateZ(-200deg) scaleX(-1);
        top: 180px;
        left: 105px;
        height: 50px;
        width: 50px;
      }
      & :nth-child(2) {
        left: 40px;
        top: 200px;
        transform: rotateZ(-160deg) scaleX(-1);
      }

      @media (max-width: 768px) {
        display: none;
      }
    `;
  if (props.bottomChilli)
    return css`
      height: 100px;
      width: 100px;
      bottom: -35px;
      left: 250px;

      @media (max-width: 768px) {
        height: 65px;
        width: 65px;

        bottom: -25px;
        left: 50px;
      }
    `;
  if (props.lemon)
    return css`
      right: 25vw;
      top: 30vh;
      height: 75px;
      width: 75px;

      @media (max-width: 768px) {
        height: 45px;
        width: 65px;

        top: 125px;
        right: 145px;
      }
    `;
  if (props.basil)
    return css`
      right: 200px;
      bottom: -15px;
      height: 75px;
      width: 75px;

      @media (max-width: 768px) {
        display: none;
      }
    `;
  /////////////////
  //second slider//
  /////////////////
  //top plates
  if (props.leftTopPlate)
    return css`
      top: 10vh;
      left: 30vw;
      height: auto;
      width: 20vh;
      max-width: 200px;
      @media (max-width: 768px) {
        top: 20vh;
        left: 1.5vw;
      }
    `;

  if (props.rightTopPlate)
    return css`
      top: 10vh;
      right: 30vw;
      height: auto;
      width: 20vh;
      max-width: 170px;
      @media (max-width: 768px) {
        top: unset;
        right: unset;
        bottom: 20vh;
        left: 3vw;
      }
    `;
  //middle plates
  if (props.leftMiddlePlate)
    return css`
      top: 38vh;
      left: 13vw;
      height: auto;
      width: 20vh;
      max-width: 200px;

      @media (max-width: 768px) {
        display: none;
      }
    `;

  if (props.rightMiddlePlate)
    return css`
      top: 38vh;
      right: 13vw;
      height: auto;
      width: 20vh;
      max-width: 200px;
      @media (max-width: 768px) {
        display: none;
      }
    `;
  /////////////////
  //bottom plates//
  /////////////////
  if (props.leftBottomPlate)
    return css`
      bottom: 12vh;
      left: 30vw;
      height: auto;
      width: 17vh;
      max-width: 170px;

      @media (max-width: 768px) {
        top: 21vh;
        bottom: unset;
        left: unset;
        right: 5.5vw;
      }
    `;

  if (props.rightBottomPlate)
    return css`
      bottom: 10.5vh;
      right: 30vw;
      height: auto;
      width: 20vh;
      max-width: 200px;
      @media (max-width: 768px) {
        bottom: 20vh;
        right: 3.5vw;
      }
    `;

  ////////////////
  //third-slider//
  ////////////////
  if (props.ingredients)
    return css`
      position: absolute;
      width: 100vw;
      height: auto;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      margin: auto;

      @media (max-width: 768px) {
        width: 180%;
        left: -40%;
        top: -5%;
      }
    `;

  /////////////////
  //last slider////
  /////////////////
  if (props.menu)
    return css`
      width: 100vw;
      height: 100vh;
      padding: 120px 90px;

      img {
        cursor: pointer;
      }

      @media (max-width: 768px) {
        padding: 60px;
      }
    `;
};

const getDelayForAnimation = (delay = 0, duration = 250) =>
  delay + duration + "ms";

export const ImgContainer = styled.div`
  position: fixed;

  img {
    width: 100%;
    height: 100%;
  }

  /*second slider animation for the plates*/
  &.fade-plate-out {
    -webkit-animation-duration: ${(props) => getDelayForAnimation(props.delay)};
    animation-duration: ${(props) => getDelayForAnimation(props.delay)};
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: ${(props) => rollOutHorizontal(props.x)};
    animation-name: ${(props) => rollOutHorizontal(props.x)};
    transition: all 250ms ease-out;
    visibility: hidden;

    @media (max-width: 768px) {
      -webkit-animation-name: ${(props) => rollOutVertical(props.y)};
      animation-name: ${(props) => rollOutVertical(props.y)};
    }
  }

  &.fade-plate-in {
    -webkit-animation-duration: ${(props) => getDelayForAnimation(props.delay)};
    animation-duration: ${(props) => getDelayForAnimation(props.delay)};
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: ${(props) => rollInHorizontal(props.x)};
    animation-name: ${(props) => rollInHorizontal(props.x)};
    transition: all 250ms ease-out;
    visibility: visible;

    @media (max-width: 768px) {
      -webkit-animation-name: ${(props) => rollInVertical(props.y)};
      animation-name: ${(props) => rollInVertical(props.y)};
    }
  }
  ${getAdditionalStyleImgContainer}
`;

export const ScrollPointsContainer = styled.div`
  position: fixed;
  z-index: 2;
  right: -40px;
  bottom: 75px;

  transform-origin: center;
  transform: rotateZ(90deg);

  @media (max-width: 768px) {
    right: -70px;
    bottom: 60px;
  }
`;
