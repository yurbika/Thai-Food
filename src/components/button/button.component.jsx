import React from "react";

import {
  CustomButtonContainer,
  HamburgerMenu,
  HamburgerMenuItems,
} from "./button.styles";

const Button = ({ children, preis, ...props }) => (
  <CustomButtonContainer {...props}>
    {props.logo ? (
      children
    ) : (
      <HamburgerMenu>
        <HamburgerMenuItems id="menu-item" />
      </HamburgerMenu>
    )}
  </CustomButtonContainer>
);

export default Button;
