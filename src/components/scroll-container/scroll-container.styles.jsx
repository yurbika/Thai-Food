import styled, { css } from "styled-components";
import theme from "../../utils/theme";

const getAdditionalStyles = (props) => {
  if (props.marginValue)
    return css`
      margin-top: -${props.marginValue}vh;
    `;
};

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all ${theme.animationTimes["500"] + "ms"} ease-in-out;
  opacity: 1;

  & > * {
    width: 100vw;
    height: 100vh;
  }

  ${getAdditionalStyles}
`;
