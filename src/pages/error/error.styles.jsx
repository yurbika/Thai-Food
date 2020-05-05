import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  a {
    cursor: pointer;
  }
`;

export const Span = styled.span`
  position: absolute;
  z-index: 2;
  top: 30vh;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  font-size: calc(20px + 1vw);
  font-weight: bold;

  @media (max-width: 768px) {
    display: inline-block;
    padding: 30px;
  }
`;
