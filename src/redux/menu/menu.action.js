import MenuActionTypes from "./menu.types";

export const setMenuCounter = (num) => ({
  type: MenuActionTypes.SET_MENU_COUNTER,
  payload: num,
});

export const setMenuSubCounter = (num) => ({
  type: MenuActionTypes.SET_MENU_SUB_COUNTER,
  payload: num,
});
