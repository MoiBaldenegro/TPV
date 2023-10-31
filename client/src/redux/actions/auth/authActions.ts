import axios from "axios";

export const LOGIN_USER = "LOGIN_USER";
export const TOGGLE_LOADING = "TOGGLE_LOADING";
export const SET_ERRORS = "SET_ERRORS";

// Register authentication 
export const createUser = user =>  async dispatch => {
    try {
        const response = await axios.post("https://tomate-server.onrender.com/auth/register", user)
        alert(`El usuario con el correo ${user.email} ha sido creado con exito`)  
    } catch (error) {
        alert(error.response?.data?.error || "Hubo un error al crear el usuario");
    }
}

// login authentication
export const loginUser = user =>  async dispatch => {
    try {
        const response = await axios.post("https://tomate-server.onrender.com/auth/login", user)
        return dispatch({ type: LOGIN_USER, payload: response.data})
    } catch (error) {
      return dispatch({type: TOGGLE_LOADING, payload: false})
    }
  }

export const setErrors = (error) => ({type: SET_ERRORS, payload: error})
export const toggleLoading = (payload: boolean) => ({type: TOGGLE_LOADING, payload})

