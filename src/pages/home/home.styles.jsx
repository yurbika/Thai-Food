import styled, { css } from "styled-components";

export const Container = styled.div`
  .background {
    position: absolute;
    z-index: -1;
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

    & :nth-child(1) {
      margin-left: -250px;
    }

    & :nth-child(2) {
      margin-left: 275px;
    }

    & :nth-child(1),
    & :nth-child(2) {
      font-weight: bold;
      font-size: 55px;
    }

    & :nth-child(3),
    & :nth-child(4) {
      margin-top: 15px;
      font-weight: bold;
      font-size: 35px;
    }
  }
`;
