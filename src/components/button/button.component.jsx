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
        tabIndex={props.menu ? 0 : -1}
        aria-label={props.menu ? "popup menu button" : null}
        aria-haspopup={props.menu ? "true" : null}
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
          props.children
        )}
      </CustomButtonContainer>
    );
  }
}

export default Button;
