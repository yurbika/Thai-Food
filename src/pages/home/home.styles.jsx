import styled, { css } from "styled-components";

export const Container = styled.div`
  position: fixed;
  overflow: hidden;
  height: 100vh;

  .background {
    position: absolute;
    z-index: 1;
  }

  //whole container
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

  /*---------------------------*/
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

export const SliderContainer = styled.div`
  position: relative;
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
      position: absolute;
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
      &.fade-in-bottom {
        transform: translateY(5vh);
      }
    `;
};

export const Slider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  ${getAdditionalSliderStyles}
`;

const getAdditionalStyle = (props) => {
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

export const ImgContainer = styled.div`
  position: fixed;

  img {
    width: 100%;
    height: 100%;
  }
  ${getAdditionalStyle}
`;
