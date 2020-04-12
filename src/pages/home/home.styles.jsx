import styled, { css } from "styled-components";

export const Container = styled.div`
  position: fixed;
  overflow: hidden;
  height: 100vh;

  .background {
    position: absolute;
    z-index: -1;
  }

  //whole container
  .fade-out {
    -webkit-transition: all 300ms linear;
    -moz-transition: all 300ms linear;
    -ms-transition: all 300ms linear;
    -o-transition: all 300ms linear;
    visibility: hidden;
    opacity: 0;
  }

  .fade-in {
    -webkit-transition: all 1100ms linear;
    -moz-transition: all 1100ms linear;
    -ms-transition: all 1100ms linear;
    -o-transition: all 1100ms linear;
    visibility: visible;
    opacity: 1;
  }

  /*---------------------------*/
  .fade-leaf-out img {
    transition: all 180ms ease-out;
    margin-top: -25vh;
    visibility: hidden;
  }

  .fade-leaf-in img {
    transition: all 2000ms ease;
    margin-top: 0;
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
  transition: margin 1.2s ease-in-out;
  &.fade-in {
    opacity: 0;
  }

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
          font-size: 15vw;
        }

        & :nth-child(3),
        & :nth-child(4) {
          margin-top: 20px;
          font-size: 5vw;
        }
      }
    `;
  if (props.secondSlider)
    return css`
      font-weight: bold;
      font-size: 3vw;
      & > * {
        margin-bottom: 30px;
      }

      & :first-child {
        margin-top: -8vh;
      }
      @media (max-width: 768px) {
        font-size: 10vw;
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
      right: 10vw;
      top: -75px;
      height: 250px;
      width: 250px;
      .fade-leaf-in {
        margin-top: -50vh;
      }
    `;
  if (props.bottomLeftLeaf)
    return css`
      top: unset;
      bottom: -450px;
      left: -10vw;
      transform-origin: 50% 0;
      transform: rotateZ(-90deg) scaleX(-1);
      height: 350px;
      width: 350px;
      .fade-leaf-in-bottom {
        margin-bottom: -100vh;
      }
    `;
  if (props.menu)
    return css`
      width: 100vw;
      min-height: 500px;
      height: 100vh;
      padding: 120px 90px;

      @media (max-width: 768px) {
        padding: 30px;
      }
    `;
};

export const ImgContainer = styled.div`
  position: absolute;

  img {
    width: 100%;
    height: 100%;
  }
  ${getAdditionalStyle}
`;
