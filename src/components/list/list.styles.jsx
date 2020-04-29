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
    font-size: calc(4px + 1vw);
    @media (max-width: 768px) {
      font-size: calc(12px + 1vw);
    }
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
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  transition: all ${theme.animationTimes["500"] + "ms"} ease-in-out;
  opacity: 1;
  pointer-events: none;

  ${getAdditionalStyles}
`;

export const FoodNameAndTranslationContainer = styled.span`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: flex-start;
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
    flex-grow: 1;
    margin-bottom: 15px;
    @media (max-width: 768px) {
      margin-bottom: 4px;
    }
  }
`;

export const FoodNameTranslation = styled.span`
  font-weight: 100;
  font-size: calc(1px + 1vw);
  @media (max-width: 768px) {
    font-size: calc(6.5px + 1vw);
  }
`;
