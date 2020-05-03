import { createSelector } from "reselect";

const selectPopup = (state) => state.popup;

export const selectShowPopup = createSelector(
  [selectPopup],
  (state) => state.showPopup
);
