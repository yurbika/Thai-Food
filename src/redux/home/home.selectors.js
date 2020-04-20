import { createSelector } from "reselect";

const selectHome = (state) => state.home;

export const selectCounter = createSelector(
  [selectHome],
  (home) => home.counter
);
