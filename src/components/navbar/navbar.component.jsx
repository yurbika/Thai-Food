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
  <Container>
    <ContentContainer>
      <PhoneNumber>
        <IconContainer>
          <img src={PhoneIcon} alt="Phone Number" />
        </IconContainer>
        <span>+49 157 6874 3357</span>
      </PhoneNumber>
      <OptionsContainer>
        <OptionLink
          className={location.pathname === "/" ? "active" : ""}
          to="/"
        >
          <span>Home</span>
        </OptionLink>
        <OptionLink
          className={location.pathname === "/menu" ? "active" : ""}
          to="/menu"
        >
          <span>Menu</span>
        </OptionLink>
        <OptionLink
          className={location.pathname === "/contact" ? "active" : ""}
          to="/contact"
        >
          <span>Contact</span>
        </OptionLink>
      </OptionsContainer>
    </ContentContainer>
  </Container>
);

export default withRouter(Navbar);
