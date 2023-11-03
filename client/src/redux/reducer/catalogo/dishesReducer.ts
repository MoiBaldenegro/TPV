import { CREATE_DISHES_REQUEST } from '../../actions/catalogo/dishesActions';

let initialState = {
  allDishes: [],
  loading: false,
  error: null,
  conflict: null,
};

export default function dishesReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_DISHES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
