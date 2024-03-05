import { toggleStatus } from '../../utils/toggleStatus';

// Public
export function profilesRequest(state) {
  return {
    ...state,
    loading: true,
  };
}

export function profilesFailure(state, action) {
  return {
    ...state,
    error: action.payload,
    loading: false,
  };
}
// Create
export function profilesConflict(state, action) {
  return {
    ...state,
    loading: false,
    conflict: action.payload,
  };
}

export function saveProfiles(state) {
  return {
    ...state,
    error: false,
    conflict: false,
    loading: false,
  };
}

// Get
export function getProfiles(state, action) {
  return {
    ...state,
    allProfiles: action.payload,
    loading: false,
    error: false,
    conflict: false,
  };
}
// Search
export function searchProfiles(state, action) {
  const value = action.payload;
  const profilesSearch = state.allProfiles.filter((element) =>
    element.profileName.toLowerCase().includes(value.toLowerCase()),
  );
  return {
    ...state,
    allProfiles: profilesSearch,
  };
}
// Update
export function discontinueProfiles(state, action) {
  const newProfilesArray = toggleStatus(state.allProfiles, action.payload);
  return {
    ...state,
    allProfiles: newProfilesArray,
    error: null,
    conflict: null,
    loading: false,
  };
}
