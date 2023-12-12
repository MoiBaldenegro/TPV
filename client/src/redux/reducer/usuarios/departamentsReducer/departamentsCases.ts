import { toggleStatus } from '../../utils/toggleStatus';

// Public
export function departamentsRequest(state) {
  return {
    ...state,
    loading: true,
  };
}

export function departamentsFailure(state, action) {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
}
// Create
export function departamentsConflict(state, action) {
  return {
    ...state,
    loading: true,
    conflict: action.error,
  };
}

export function saveDepartaments(state) {
  return {
    ...state,
    error: null,
    conflict: null,
    loading: false,
  };
}

// Get
export function getDepartaments(state, action) {
  return {
    ...state,
    allDepartaments: action.payload,
    loading: false,
    error: null,
    conflict: null,
  };
}
// Search
export function searchDepartaments(state, action) {
  const value = action.payload;
  const departamentsSearch = state.allDepartaments.filter((element) =>
    element.departamentName.toLowerCase().includes(value.toLowerCase()),
  );
  return {
    ...state,
    allDepartaments: departamentsSearch,
  };
}
// Update
export function discontinueDepartaments(state, action) {
  const newDepartamentsArray = toggleStatus(
    state.allDepartaments,
    action.payload,
  );
  return {
    ...state,
    allDepartaments: newDepartamentsArray,
    error: null,
    conflict: null,
    loading: false,
  };
}
