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

export const Slider = styled.section`
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
  overflow: hidden;
  justify-items: center;
  align-items: center;
  padding: 100px 20vw;

  @media (max-width: 768px) {
    padding: 42px 14vw;
  }
`;

export const ScrollPointsContainer = styled.div`
  position: fixed;
  z-index: 2;
  right: 0;
  left: 0;
  margin: 0 auto;
  display: inline-block;
  bottom: 25px;

  & > span {
    display: block;
  }
  @media (max-width: 768px) {
    right: -5px;
    left: unset;
    margin: 0;
    bottom: 5px;
  }
`;

export const FoodName = styled.h1`
  margin-bottom: 10px;
  font-size: calc(20px + 1vw);

  @media (max-width: 768px) {
    margin-bottom: 5px;
    font-size: calc(18px + 1vw);
  }
`;
