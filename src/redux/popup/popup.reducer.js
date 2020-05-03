import PopupActionTypes from "./popup.types";

const INITIAL_STATE = {
  showPopup: true,
};

const popupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PopupActionTypes.TOGGLE_POPUP:
      return { ...state, showPopup: !state.showPopup };

    default:
      return state;
  }
};

export default popupReducer;
