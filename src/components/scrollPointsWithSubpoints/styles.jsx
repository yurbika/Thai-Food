import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & * {
    margin-bottom: 2px;
  }
`;

const getAdditionalStylesTitle = (props) =>
  props.active
    ? css`
        font-weight: bold;
        border-bottom: 2px solid #e76a0b;
      `
    : "";

export const Title = styled.span`
  ${getAdditionalStylesTitle}
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
  height: 20px;
  width: 20px;
  border: 2px solid #e76a0b;
  border-radius: 50%;
  background: transparent;
  z-index: 1;
  margin-top: 4px;

  ${getAdditionalStylesPoint}
`;
