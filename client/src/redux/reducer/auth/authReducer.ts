import { LOGIN_USER, SET_ERRORS, TOGGLE_LOADING } from '../../actions/auth';

const initialState = {
  loginUsers: [],
  allUsers: [],
  isLoading: true,
  errors: [], // Asegúrate de agregar el campo de errores si lo utilizas
  invalidCredentials: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        loginUsers: [...state.loginUsers, action.payload],
        auth: 'Auth',
      };

    default:
      return state;
  }
}
