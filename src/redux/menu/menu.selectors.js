import { createSelector } from "reselect";

const selectMenu = (state) => state.menu;

export const selectMenuCounter = createSelector(
  [selectMenu],
  (menu) => menu.menuCounter
);
