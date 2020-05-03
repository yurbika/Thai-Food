import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

//redux
import { togglePopup } from "../../redux/popup/popup.action";
import { selectShowPopup } from "../../redux/popup/popup.selectors";

//assets
import Logo from "../../assets/logo.png";

//styles
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
    const { togglePopup, showPopup, ...props } = this.props;
    return (
      <CustomButtonContainer
        tabIndex={props.menu ? 0 : -1}
        aria-label={props.menu ? "popup menu button" : null}
        aria-haspopup={props.menu ? "true" : null}
        {...props}
        onClick={() => {
          if (props.menu) togglePopup();
        }}
      >
        {props.menu ? (
          <HamburgerMenu>
            <HamburgerMenuItems className={showPopup ? "animate" : ""} />
          </HamburgerMenu>
        ) : (
          <Link to="/" onClick={() => (showPopup ? togglePopup() : null)}>
            <img src={Logo} alt="" />
          </Link>
        )}
      </CustomButtonContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  showPopup: selectShowPopup,
});

const mapDispatchToProps = (dispatch) => ({
  togglePopup: () => dispatch(togglePopup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
