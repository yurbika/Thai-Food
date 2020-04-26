import { combineReducers } from "redux";

import homeReducer from "./home/home.reducer";
import appReducer from "./app/app.reducer";
import menuReducer from "./menu/menu.reducer";

export default combineReducers({
  home: homeReducer,
  app: appReducer,
  menu: menuReducer,
});
