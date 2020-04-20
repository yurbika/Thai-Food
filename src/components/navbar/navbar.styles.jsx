import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  z-index: 9999999;
  width: 100%;
  padding: 60px 120px;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  @media (max-width: 768px) {
    padding: 5px 50px;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  width: inherit;
  height: inherit;
`;

export const OptionsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  & > span {
    color: #82bf65;
  }
  cursor: pointer;
  &:hover {
    span {
      color: #e76a0b;
    }
  }
  &.active {
    cursor: default;
    pointer-events: none;
    & span {
      font-weight: bold;
      padding-bottom: 0.5rem;
      border-bottom: 3px solid #82bf65;
      border-radius: 2px;
      letter-spacing: 0.5px;
      transition: all 0.3s ease-in;
    }
  }
`;
