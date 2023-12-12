import {
  DEPARTAMENTS_REQUEST,
  DEPARTAMENTS_FAILURE,
  DEPARTAMENTS_CONFLICT,
  SAVE_DEPARTAMENTS,
  GET_DEPARTAMENTS,
  SEARCH_DEPARTAMENTS,
  DISCONTINUE_DEPARTAMENT,
} from '../../../actions/usuarios/departamentsActions/actionTypes';
import {
  searchDepartaments,
  departamentsConflict,
  departamentsFailure,
  departamentsRequest,
  getDepartaments,
  saveDepartaments,
  discontinueDepartaments,
} from './departamentsCases';

const initialState = {
  allDepartaments: [],
  loading: false,
  error: null,
  conflict: null,
};

export default function departamentsReducer(state = initialState, action) {
  switch (action.type) {
    // Public
    case DEPARTAMENTS_REQUEST:
      return departamentsRequest(state);
    case DEPARTAMENTS_FAILURE:
      return departamentsFailure(state, action);
    // Create
    case DEPARTAMENTS_CONFLICT:
      return departamentsConflict(state, action);
    case SAVE_DEPARTAMENTS:
      return saveDepartaments(state);
    // Get
    case GET_DEPARTAMENTS:
      return getDepartaments(state, action);
    // Search
    case SEARCH_DEPARTAMENTS:
      return searchDepartaments(state, action);
    // Update
    case DISCONTINUE_DEPARTAMENT:
      return discontinueDepartaments(state, action);
    default:
      return state;
  }
}
