import styled, { css } from "styled-components";
import theme from "../../utils/theme";

const getAdditionalStylesContainer = (props) => {
  if (props.active)
    return css`
      visibility: visible;
    `;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  height: 100vh;
  visibility: hidden;

  ${getAdditionalStylesContainer}
`;

const getAdditionalStyles = (props) => {
  if (props.marginValue)
    return css`
      margin-top: -${props.marginValue}vh;
    `;
};

export const ScrollContainer = styled.div`
  overflow: hidden;
  transition: all ${theme.animationTimes["500"] + "ms"} ease-in-out;
  opacity: 1;

  ${getAdditionalStyles}
`;
