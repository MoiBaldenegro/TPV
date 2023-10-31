import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import categoriesReducer from "./catalogo/categoriesReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer
});

export default rootReducer;
