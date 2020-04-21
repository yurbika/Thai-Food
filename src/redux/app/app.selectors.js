import { createSelector } from "reselect";

const selectApp = (state) => state.app;

export const selectFirstMount = createSelector(
  [selectApp],
  (app) => app.firstMount
);

export const selectIsLoading = createSelector(
  [selectApp],
  (app) => app.isLoading
);
