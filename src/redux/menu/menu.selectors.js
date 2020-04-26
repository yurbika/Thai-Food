import { createSelector } from "reselect";

const selectMenu = (state) => state.menu;

export const selectCounter = createSelector(
  [selectMenu],
  (home) => home.counter
);
