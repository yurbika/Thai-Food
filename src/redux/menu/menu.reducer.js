import MenuActionTypes from "./menu.types";

const INITIAL_STATE = {
  menuCounter: 0,
  menuSubCounter: 0,
  sliderCountArr: [],
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MenuActionTypes.SET_MENU_COUNTER:
      return { ...state, menuCounter: action.payload };
    case MenuActionTypes.SET_MENU_SUB_COUNTER:
      return {
        ...state,
        menuSubCounter: action.payload,
      };
    case MenuActionTypes.SET_SLIDER_COUNT_ARRAY:
      return {
        ...state,
        sliderCountArr: action.payload,
      };
    default:
      return state;
  }
};

export default menuReducer;
