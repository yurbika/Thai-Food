import styled, { css } from "styled-components";
import theme from "../../utils/theme";

const getAdditionalStyles = (props) => {
  if (props.active)
    return css`
      visibility: visible;
      transform: none;
    `;
};

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: white;
  z-index: 3;
  transform: translateY(100vh);
  visibility: hidden;
  transition: all ${theme.animationTimes["500"] + "ms"} ease-in-out;

  img {
    width: 100%;
    height: 100%;
  }

  ${getAdditionalStyles}
`;

export const ImgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 100px;
  z-index: -1;

  width: 100vw;
  height: 100vh;
`;

export const PopupNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
  list-style: none;
  padding: 120px;
  font-size: calc(40px + 1vw);
  a {
    display: inline-block;
    text-decoration: none;
  }

  span {
    display: inline-block;
    cursor: pointer;
    border-bottom: 5px solid transparent;

    &:hover {
      border-bottom: 5px solid ${theme.colors.darkOrange};
    }
  }
`;
