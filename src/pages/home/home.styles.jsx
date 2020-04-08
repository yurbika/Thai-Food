import styled, { css } from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  height: 100vh;

  .background {
    position: absolute;
    z-index: -1;
  }

  .scroll-container {
    overflow: hidden;
  }

.fade-out{
    color: #FFFFFF;

    -webkit-transition: opacity 300ms linear;
    -moz-transition: opacity 300ms linear;
    -ms-transition: opacity 300ms linear;
    -o-transition: opacity 300ms linear;
     opacity: 0;
}
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
