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
      position: absolute;
      font-weight: bold;
      font-size: 3vw;
      opacity: 0;

      &.fade-in-bottom {
        transform: translateY(5vh);
      }

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
      @media (max-width: 768px) {
        bottom: -200px;
        left: -250px;

        height: 250px;
        width: 250px;
      }
    `;
  if (props.menu)
    return css`
      width: 100vw;
      min-height: 500px;
      height: 100vh;
      padding: 120px 90px;

      img {
        cursor: pointer;
      }

      @media (max-width: 768px) {
        padding: 0 30px;
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
