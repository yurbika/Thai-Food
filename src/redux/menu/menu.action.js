import MenuActionTypes from "./menu.types";

export const setCounter = (num) => ({
  type: MenuActionTypes.SET_COUNTER,
  payload: num,
});
