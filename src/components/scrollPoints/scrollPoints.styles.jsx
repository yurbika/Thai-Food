import styled, { css } from "styled-components";
import theme from "../../utils/theme";

export const Container = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
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
  margin: 0.7rem;
  height: 20px;
  width: 20px;
  border: 3px solid ${theme.colors.darkOrange};
  border-radius: 50%;
  background: transparent;
  z-index: 1;

  ${getAdditionalStylesPoint}
`;
