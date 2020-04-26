import MenuActionTypes from "./menu.types";

const INITIAL_STATE = {
  counter: 0,
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MenuActionTypes.SET_COUNTER:
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};

export default menuReducer;
