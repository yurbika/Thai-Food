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

//styles
import { Container, ImgContainer, PopupNavigation } from "./popup.styles";

class Popup extends React.Component {
  constructor() {
    super();

    this.state = {
      namesArr: filterData().namesArr,
    };
  }

  render() {
    const { togglePopup, setMenuCounter, ...props } = this.props;
    return (
      <Container {...props}>
        <ImgContainer>
          <img src={BigIcon} alt="" />
        </ImgContainer>

        <PopupNavigation>
          {this.state.namesArr.map((item, index) => (
            <Link to="/menu">
              <span
                onClick={() => {
                  togglePopup();
                  setMenuCounter(index);
                }}
              >
                {item.toUpperCase()}
              </span>
            </Link>
          ))}
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
