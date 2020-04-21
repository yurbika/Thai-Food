import AppActionTypes from "./app.types";

export const setFirstMount = () => ({
  type: AppActionTypes.SET_FIRST_MOUNTING,
});

export const setIsLoading = (boolean) => ({
  type: AppActionTypes.SET_LOADING,
  payload: boolean,
});
