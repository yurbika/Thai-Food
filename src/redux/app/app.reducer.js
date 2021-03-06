import AppActionTypes from "./app.types";

const INITIAL_STATE = {
  firstMount: true,
  isLoading: false,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppActionTypes.SET_FIRST_MOUNTING:
      return { ...state, firstMount: false };
    case AppActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default appReducer;
