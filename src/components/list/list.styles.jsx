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
  & > * {
    font-size: calc(10px + 1vw);
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

export const FoodNameAndTranslation = styled.span`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

export const FoodName = styled.span`
  font-weight: bold;
`;

export const Row = styled.p`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > * {
    margin: 5px;
    flex-grow: 1;
  }
`;

export const FoodNameTranslation = styled.span`
  font-weight: 100;
`;
