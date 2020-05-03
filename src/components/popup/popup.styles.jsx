import styled, { css } from "styled-components";
import theme from "../../utils/theme";

const getAdditionalStyles = (props) => {
  if (props.active)
    return css`
      visibility: visible;
      transform: none;
    `;
};

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: white;
  z-index: 3;
  transform: translateY(100vh);
  visibility: hidden;
  transition: all ${theme.animationTimes["500"] + "ms"} ease-in-out;

  img {
    width: 100%;
    height: 100%;
  }

  ${getAdditionalStyles}
`;

export const ImgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 100px;

  width: 100vw;
  height: 100vh;
`;
