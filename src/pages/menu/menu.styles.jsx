import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  overflow: hidden;
  height: 100vh;

  .background {
    position: absolute;
    z-index: -2;
  }
`;

export const Slider = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  * span {
    z-index: 1;
  }
`;

export const Content = styled.div`
  display: inline-flex;
  flex-direction: column;
  min-height: 175px;
  height: 30%;
  overflow: hidden;
`;

export const ScrollPointsContainer = styled.div`
  position: fixed;
  z-index: 2;
  right: 0;
  bottom: 0px;

  @media (max-width: 768px) {
    right: -70px;
    bottom: 60px;
  }
`;

export const FoodName = styled.h2`
  margin-bottom: 10px;
`;
