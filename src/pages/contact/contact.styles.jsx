import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  overflow: hidden;

  & .background {
    position: absolute;
    z-index: -2;
  }
`;

export const Content = styled.main`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  padding: 120px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;

  span {
    font-weight: bold;
    font-size: calc(25px + 1vw);
  }
`;
