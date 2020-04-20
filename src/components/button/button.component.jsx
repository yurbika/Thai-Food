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
    const { children, ...props } = this.props;
    return (
      <CustomButtonContainer
        {...props}
        onClick={() => {
          if (props.menu) this.setState({ menuOpen: !this.state.menuOpen });
        }}
      >
        {props.menu ? (
          <HamburgerMenu>
            <HamburgerMenuItems
              className={this.state.menuOpen ? "animate" : ""}
            />
          </HamburgerMenu>
        ) : (
          children
        )}
      </CustomButtonContainer>
    );
  }
}

export default Button;
