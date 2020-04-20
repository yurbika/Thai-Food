import HomeActionTypes from "./home.types";

const INITIAL_STATE = {
  counter: 0,
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeActionTypes.SET_COUNTER:
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};

export default homeReducer;
