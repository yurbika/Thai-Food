import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../utils/theme";

export const Container = styled.nav`
  position: fixed;
  z-index: 1;
  width: 100%;
  padding: 60px 120px;
  top: -2px;
  left: 0;
  right: 0;
  margin: 0 auto;

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
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.8);
  width: 250px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;

  & > span {
    color: ${theme.colors.green};
    font-weight: bold;
    display: inline-block;
  }

  cursor: pointer;
  width: 100%;
  &:hover {
    span {
      color: ${theme.colors.darkOrange};
    }
  }
  &.active {
    cursor: default;
    pointer-events: none;
    & span {
      color: ${theme.colors.green};
      padding-bottom: 0.5rem;
      border-bottom: 3px solid ${theme.colors.green};
      border-radius: 2px;
      letter-spacing: 0.5px;
      transition: all 0.3s ease-in;
    }
  }
`;

export const PhoneNumber = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  height: 100%;
  width: 75%;
  margin-bottom: 5px;
  @media (max-width: 550px) {
    display: none;
  }
`;

export const IconContainer = styled.div`
  margin-right: 5px;
  display: flex;
  align-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`;
