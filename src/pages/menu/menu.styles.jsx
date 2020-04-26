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
  width: 100%;
  height: 100%;
  span {
    pointer-events: none;
    z-index: 1;
  }
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
