import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//redux
import { togglePopup } from "../../redux/popup/popup.action";

import { setMenuCounter } from "../../redux/menu/menu.action";

//assets
import BigIcon from "../../assets/big-icon-higherOpacity.svg";

//utils
import filterData from "../../menu-data/menu-data.utils";
import ID_GENERATOR from "../../utils/uniqueKey";

//styles
import { Container, ImgContainer, PopupNavigation } from "./popup.styles";

class Popup extends React.Component {
  constructor() {
    super();

    this.state = {
      namesArr: filterData().namesArr,
      normalSize: false,
    };
  }

  handlePopupResize = () => {
    if (window.innerWidth > 768)
      this.setState({
        normalSize: true,
      });
    else
      this.setState({
        normalSize: false,
      });
  };

  componentDidMount() {
    this.handlePopupResize();
    window.addEventListener("resize", this.handlePopupResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handlePopupResize);
  }
  render() {
    const { togglePopup, setMenuCounter, ...props } = this.props;
    return (
      <Container {...props} tabIndex={0}>
        <ImgContainer>
          <img src={BigIcon} alt="" />
        </ImgContainer>

        <PopupNavigation aria-label="popup" tabIndex={0}>
          {this.state.normalSize ? (
            this.state.namesArr.map((item, index) => (
              <Link to="/menu" key={ID_GENERATOR("popup-link-")}>
                <span
                  key={ID_GENERATOR("popup-span-")}
                  onClick={() => {
                    togglePopup();
                    setMenuCounter(index);
                  }}
                >
                  {item.toUpperCase()}
                </span>
              </Link>
            ))
          ) : (
            <React.Fragment key={ID_GENERATOR("popup-fragment-")}>
              <Link
                to="/"
                onClick={() => {
                  togglePopup();
                }}
                key={ID_GENERATOR("popup-link-")}
              >
                <span tabIndex={0}> Home</span>
              </Link>
              <Link
                to="/menu"
                onClick={() => {
                  togglePopup();
                }}
                key={ID_GENERATOR("popup-link-")}
              >
                <span tabIndex={0}> Menu</span>
              </Link>
              <Link
                to="/contact"
                onClick={() => {
                  togglePopup();
                }}
                key={ID_GENERATOR("popup-link-")}
              >
                <span tabIndex={0}> Contact</span>
              </Link>
            </React.Fragment>
          )}
        </PopupNavigation>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  togglePopup: () => dispatch(togglePopup()),
  setMenuCounter: (num) => dispatch(setMenuCounter(num)),
});

export default connect(null, mapDispatchToProps)(Popup);
