import styled from "styled-components";
import theme from "../../utils/theme";

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-content: space-between;
  height: 100vh;
  font-size: calc(4px + 1vw);
  visibility: ${(props) => (props.active ? "visible" : "hidden")};

  @media (max-width: 768px) {
    font-size: calc(15px + 0.5vw);
  }
`;

export const ScrollContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  transition: all ${theme.animationTimes["500"] + "ms"} ease-in-out;
  opacity: 1;
  pointer-events: none;
  margin-top: -${(props) => props.marginValue}vh;
`;

export const FoodNameAndTranslationContainer = styled.span`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: flex-start;
  width: 50%;
  margin-left: 5px;

  & > * {
    text-align: start;
  }
`;

export const FoodName = styled.span`
  font-weight: bold;
`;

export const Row = styled.p`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: end;

  & > * {
    flex-grow: 1;
    margin-bottom: 15px;
    @media (max-width: 768px) {
      margin-bottom: 10px;
      text-align: center;
    }
  }
`;

export const FoodNameTranslation = styled.span`
  font-weight: 100;
  font-size: calc(1px + 1vw);

  @media (max-width: 768px) {
    font-size: calc(13px + 0.5vw);
  }
`;
