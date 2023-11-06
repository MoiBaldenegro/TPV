//public
export function modifiersRequest(state) {
  return {
    ...state,
    loading: true,
  };
}
export function modifiersFailure(state, action) {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
}

// Create
export function modifiersConflict(state, action) {
  return {
    ...state,
    loading: true,
    conflict: action.error,
  };
}

export function saveModifiers(state) {
  return {
    ...state,
    error: null,
    conflict: null,
    loading: false,
  };
}

// Get
export function getModifiers(state, action) {
  return {
    ...state,
    allModifiers: action.payload,
    loading: false,
    error: null,
    conflict: null,
  };
}

// Search
export function searchModifiers(state, action) {
  const value = action.payload;
  const modifiersSearch = state.allModifiers.filter((element) =>
    element.categoryName.toLowerCase().includes(value.toLowerCase()),
  );
  return {
    ...state,
    allCategories: modifiersSearch,
  };
}
