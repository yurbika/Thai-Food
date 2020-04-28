import styled, { css } from "styled-components";

export const Container = styled.nav`
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
        font-size: 0.7vw;
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
  margin-top: 2px;
  margin-bottom: 2px;

  ${getAdditionalStylesPoint}
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background: none;
  width: 100%;
  height: 100%;
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
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  position: absolute;
  ${getAdditionalStylesWrapper}
`;
