import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import categoriesReducer from './catalogo/categoriesReducer/categoriesReducer';
import productsReducer from './catalogo/productsReducer';
import dishesReducer from './catalogo/dishesReducer/dishesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  products: productsReducer,
  dishes: dishesReducer,
});

export default rootReducer;
