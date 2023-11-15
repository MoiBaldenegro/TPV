import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import categoriesReducer from './catalogo/categoriesReducer/categoriesReducer';
import dishesReducer from './catalogo/dishesReducer/dishesReducer';
import modifiersReducer from './catalogo/modifiersReducer/modifiersReducer';
import menusReducer from './catalogo/menusRecipes.ts/menusReducer';
import productsAndPricesReducer from './catalogo/productsAndRecipes/productsAndPricesReducer';
import billsReducer from './ventas/billsReducer/billsReducer';
import notesReducer from './ventas/notesReducer/notesReducer';
import paymentsReducer from './ventas/paymentsReducer/paymentsReducer';
import cancellationsReducer from './ventas/cancellationReducer/cancellationReducer';
import cancellationReasonsReducer from './ventas/cancellationReasonReducer/cancellationReasonReducer';

const rootReducer = combineReducers({
  // Catalogo
  auth: authReducer,
  categories: categoriesReducer,
  products: productsAndPricesReducer,
  dishes: dishesReducer,
  modifiers: modifiersReducer,
  menus: menusReducer,
  // Ventas
  bills: billsReducer,
  notes: notesReducer,
  payments: paymentsReducer,
  cancellations: cancellationsReducer,
  cancellationReasons: cancellationReasonsReducer,
  // Usuarios
});

export default rootReducer;
