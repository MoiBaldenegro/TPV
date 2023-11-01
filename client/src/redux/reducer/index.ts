import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import categoriesReducer from "./catalogo/categoriesReducer";
import productsReducer from "./catalogo/productsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  products: productsReducer
});

export default rootReducer;
