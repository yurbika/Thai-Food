import styled, { css, keyframes } from "styled-components";

const fadeInStopOutAnimation = keyframes`
0%{
  transform: translateY(-100vh) ;
  visibility: visible;
}
50%{
  transform: translateY(0) ;
}
100%{
  transform: translateY(100vh);
  visibility: hidden;
}
`;

const getAdditionalStyles = (props) => {
  if (!props.firstMount && props.isLoading)
    return css`
      -webkit-animation-duration: 2500ms;
      animation-duration: 2500ms;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-name: ${fadeInStopOutAnimation};
      animation-name: ${fadeInStopOutAnimation};
      z-index: 4;
    `;
  if (!props.isLoading)
    return css`
      transform: translateY(100vh);
      visibility: hidden;
    `;
};

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
  pointer-events: none;
  transition: transform 750ms ease-in-out, visibility 750ms ease-in-out;
  z-index: 10;

  ${getAdditionalStyles}
`;

export const ImgContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: -1;
  padding: 30px;

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
