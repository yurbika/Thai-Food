import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;

  span {
    font-weight: bold;
  }
`;

export const Point = styled.span`
  cursor: pointer;
  display: block;
  height: 20px;
  width: 20px;
  border: 2px solid #e76a0b;
  border-radius: 50%;
  background: transparent;
  z-index: 1;
`;
