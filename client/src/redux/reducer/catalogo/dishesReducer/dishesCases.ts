//public
export function dishesRequest(state) {
  return {
    ...state,
    loading: true,
  };
}
export function dishesFailure(state, action) {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
}

// Create
export function createDishes(state) {}

// Get
export function getDishes(state, action) {
  return {
    ...state,
    allDishes: action.payload,
    loading: false,
    error: null,
    conflict: null,
  };
}

//Search
