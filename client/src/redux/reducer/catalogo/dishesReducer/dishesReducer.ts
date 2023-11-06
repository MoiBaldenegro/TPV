import {
  DISHES_FAILURE,
  GET_DISHES,
} from '../../../actions/catalogo/dishesActions/actionTypes';
import { CREATE_DISHES_REQUEST } from '../../../actions/catalogo/dishesActions/dishesActions';
import { dishesFailure, dishesRequest, getDishes } from './dishesCases';

let initialState = {
  allDishes: [],
  loading: false,
  error: null,
  conflict: null,
};

export default function dishesReducer(state = initialState, action) {
  switch (action.type) {
    // Public
    case DISHES_FAILURE:
      return dishesFailure;
    // Create
    case CREATE_DISHES_REQUEST:
      return dishesRequest;
    // Get
    case GET_DISHES:
      return getDishes;
    default:
      return state;
  }
}
