import styled, { css } from "styled-components";
import theme from "../../utils/theme";

const getAdditionalStylesContainer = (props) => {
  if (props.active)
    return css`
      visibility: visible;
    `;
};

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-content: space-between;
  height: 100vh;
  visibility: hidden;
  & > div {
    display: inline-block;
    width: auto;
  }
  ${getAdditionalStylesContainer}
`;

const getAdditionalStyles = (props) => {
  if (props.marginValue)
    return css`
      margin-top: -${props.marginValue}vh;
    `;
};

export const ScrollContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  transition: all ${theme.animationTimes["500"] + "ms"} ease-in-out;
  opacity: 1;
  pointer-events: none;

  ${getAdditionalStyles}
`;

export const FoodNameAndTranslation = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: 650px;
`;

export const Row = styled.p`
  & > * {
    margin: 5px;
  }
`;

export const Span = styled.span`
  display: inline-block;
  width: 65px;
`;
