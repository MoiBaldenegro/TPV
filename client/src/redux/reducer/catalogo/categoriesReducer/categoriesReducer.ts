import {
  CATEGORIES_REQUEST,
  CATEGORIES_FAILURE,
  CATEGORIES_CONFLICT,
  SAVE_CATEGORIES,
  GET_CATEGORIES,
  SEARCH_CATEGORIES,
} from '../../../actions/catalogo/categoriesActions/actionTypes';
import searchCategories, {
  categoriesConflict,
  categoriesFailure,
  categoriesRequest,
  getCategories,
  saveCategories,
} from './categoriesCases';

const initialState = {
  allCategories: [],
  loading: false,
  error: null,
  conflict: null,
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    // Public
    case CATEGORIES_REQUEST:
      return categoriesRequest(state);
    case CATEGORIES_FAILURE:
      return categoriesFailure(state, action);
    // Create
    case CATEGORIES_CONFLICT:
      return categoriesConflict(state, action);
    case SAVE_CATEGORIES:
      return saveCategories(state);
    // Get
    case GET_CATEGORIES:
      return getCategories;
    // Search
    case SEARCH_CATEGORIES:
      return searchCategories;
    default:
      return state;
  }
}
