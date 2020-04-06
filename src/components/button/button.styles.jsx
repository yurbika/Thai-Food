import styled, { css } from "styled-components";

const getAdditionalButtonStyle = (props) => {
  if (props.logo)
    return css`
      left: 0;
      right: unset;
      border-radius: 0 15px 15px 0;
    `;
};

export const CustomButtonContainer = styled.button`
  background: #92c162;
  z-index: 999999;
  cursor: pointer;
  position: fixed;
  top: calc(50% - 45px);
  right: 0;
  width: 135px;
  height: 90px;
  outline: none;
  border: none;
  padding: 25px;
  border-radius: 15px 0 0 15px;

  ${getAdditionalButtonStyle};
`;

export const HamburgerMenuItems = styled.div`
  position: relative;
  background: white;
  transition: all 0ms 300ms;
  width: inherit;
  height: inerhit;
  margin: 0 15px;
  &,
  &:after,
  &:before {
    width: 100%;
    height: 3px;
    border-radius: 15px;
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 10px;
    background: white;
    transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    background: white;
    transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  &.animate {
    background: rgba(255, 255, 255, 0);
    &:after,
    &:before {
      z-index: 11;
    }
    &:after {
      top: 0;
      transform: rotate(45deg);
      transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1),
        transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    &:before {
      bottom: 0;
      transform: rotate(-45deg);
      transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1),
        transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }
  }
`;

export const HamburgerMenu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  pointer-events: none;
`;
