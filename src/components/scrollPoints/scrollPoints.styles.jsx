import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const getAdditionalStylesPoint = (props) => {
  if (props.active)
    return css`
      background: #e76a0b;
    `;
};

export const Point = styled.span`
  cursor: pointer;
  display: block;
  margin: 0.7rem;
  height: 20px;
  width: 20px;
  border: 3px solid #e76a0b;
  border-radius: 50%;
  background: transparent;
  z-index: 1;

  ${getAdditionalStylesPoint}
`;
