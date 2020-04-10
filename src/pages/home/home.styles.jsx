import styled, { css } from "styled-components";

export const Container = styled.div`
  position: fixed;
  overflow: hidden;
  height: 100vh;

  .background {
    position: absolute;
    z-index: -1;
  }

  .scroll-container {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: margin 1s ease-in-out;
    &.fade-in {
      opacity: 0;
    }

    & > * {
      width: 100vw;
      height: 100vh;
    }
  }
  .translate-1 {
    margin-top: -100vh;
  }

  .translate-2 {
    margin-top: -200vh;
  }

  .translate-3 {
    margin-top: -300vh;
  }

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

  .text-container-container {
    position: relative;
  }

  .text-container {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    //nach schauen wie font size scalibar ist

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
  }
`;
