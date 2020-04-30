import styled, { css } from "styled-components";
import theme from "../../utils/theme";

export const Container = styled.nav`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  & * {
    margin-right: 2px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const getAdditionalStylesTitle = (props) =>
  props.active
    ? css`
        font-weight: bold;
        border-bottom: 2px solid ${theme.colors.darkOrange};
      `
    : "";

export const Title = styled.span`
  ${getAdditionalStylesTitle}
`;

const getAdditionalStylesPoint = (props) => {
  if (props.active)
    return css`
      background: ${theme.colors.darkOrange};
    `;
};

export const Point = styled.span`
  cursor: pointer;
  display: block;
  height: 20px;
  width: 20px;
  border: 2px solid ${theme.colors.darkOrange};
  border-radius: 50%;
  background: transparent;
  z-index: 1;

  ${getAdditionalStylesPoint}
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background: none;
  margin-bottom: 5px;
`;

const getAdditionalStylesWrapper = (props) => {
  if (props.active)
    return css`
      position: relative;
      opacity: 1;
      pointer-events: unset;
      visibility: visible;
    `;
};

export const PointsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  position: absolute;
  margin-bottom: 0;

  ${getAdditionalStylesWrapper}
`;

export const TitleWithPoints = styled.div`
  margin-bottom: 0;
  display: inline-block;
`;
