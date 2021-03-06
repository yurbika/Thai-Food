import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const ImgContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: -1;
  padding: 90px;

  img {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;

export const GIFContainer = styled.div`
  height: auto;
  width: 100vw;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    margin-left: calc(50px + 5vw);
  }
`;
