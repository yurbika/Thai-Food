import React from "react";

import {
  CustomButtonContainer,
  HamburgerMenu,
  HamburgerMenuItems,
} from "./button.styles";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = { menuOpen: false };
  }

  render() {
    const { ...props } = this.props;
    return (
      <CustomButtonContainer
        aria-label="popup menu button"
        aria-haspopup={props.menu ? "true" : "false"}
        {...props}
        onClick={() => {
          if (props.menu) this.setState({ menuOpen: !this.state.menuOpen });
        }}
      >
        {props.menu ? (
          <HamburgerMenu aria-label="hamburger-menu">
            <HamburgerMenuItems
              className={this.state.menuOpen ? "animate" : ""}
            />
          </HamburgerMenu>
        ) : (
          props.children
        )}
      </CustomButtonContainer>
    );
  }
}

export default Button;
