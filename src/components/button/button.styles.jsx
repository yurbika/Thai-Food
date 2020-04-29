import styled, { css } from "styled-components";

//default button is placed right

const getAdditionalButtonStyle = (props) => {
  if (props.left)
    return css`
      left: 0;
      right: unset;
      border-radius: 0 15px 15px 0;
      @media (max-width: 768px) {
        top: 0;
        bottom: unset;
        border-radius: 0 0 15px 15px;
      }
    `;
};

export const CustomButtonContainer = styled.button`
  background: #92c162;
  z-index: 3;
  cursor: pointer;
  position: fixed;
  top: calc(50% - 45px);
  right: 0;
  width: 100px;
  height: 70px;
  border: none;
  padding: 10px;
  border-radius: 15px 0 0 15px;

  @media (max-width: 768px) {
    top: unset;
    width: 90px;
    height: 45px;
    bottom: 0;
    padding: 15px;
    left: calc(50% - 45px);
    border-radius: 15px 15px 0 0;
  }
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
