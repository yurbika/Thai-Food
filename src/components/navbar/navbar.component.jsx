import React from "react";
import { withRouter } from "react-router-dom";

//assets
import PhoneIcon from "../../assets/navbar/phone.svg";

//styles
import {
  Container,
  ContentContainer,
  OptionLink,
  OptionsContainer,
  PhoneNumber,
  IconContainer,
} from "./navbar.styles";

const Navbar = ({ location }) => (
  <Container aria-label={"Main"} tabIndex={0}>
    <ContentContainer>
      <PhoneNumber
        tabIndex={0}
        aria-label={"Phone number, navigation element 1 of 4"}
      >
        <IconContainer>
          <img src={PhoneIcon} alt="" />
        </IconContainer>
        <span tabIndex={0}>+49 157 6874 3357</span>
      </PhoneNumber>
      <OptionsContainer>
        <OptionLink
          className={location.pathname === "/" ? "active" : ""}
          to="/"
        >
          <span aria-label={"Home, navigation element 2 of 4"}>Home</span>
        </OptionLink>
        <OptionLink
          className={location.pathname === "/menu" ? "active" : ""}
          to="/menu"
        >
          <span aria-label={"Menu, navigation element 3 of 4"}>Menu</span>
        </OptionLink>
        <OptionLink
          className={location.pathname === "/contact" ? "active" : ""}
          to="/contact"
        >
          <span aria-label={"Contact, navigation element 4 of 4"}>Contact</span>
        </OptionLink>
      </OptionsContainer>
    </ContentContainer>
  </Container>
);

export default withRouter(Navbar);
