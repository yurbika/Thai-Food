import { createSelector } from "reselect";

const selectMenu = (state) => state.menu;

export const selectMenuCounter = createSelector(
  [selectMenu],
  (menu) => menu.menuCounter
);

export const selectMenuSubCounter = createSelector(
  [selectMenu],
  (menu) => menu.menuSubCounter
);
