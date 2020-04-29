import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import musicReducer from "./music";
import favoritesReducer from "./favorites";

export default createStore(
  combineReducers({
    music: musicReducer,
    favorites: favoritesReducer,
  }),
  applyMiddleware(thunk, logger)
);
