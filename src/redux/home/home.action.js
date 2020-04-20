import HomeActionTypes from "./home.types";

export const setCounter = (num) => ({
  type: HomeActionTypes.SET_COUNTER,
  payload: num,
});
