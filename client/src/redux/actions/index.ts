import axios from "axios"

export const GET_CATEGORIES = "GET_CATEGORIES";
export const TOGGLE_MAIN_RENDER = "TOGGLE_MAIN_RENDER";
export const INVALID_CREDENTIALS = "INVALID_CREDENTIALS";
export const TOGGLE_LOADING = "TOGGLE_LOADING";
export const CREATE_USER = "CREATE_USER;";
export const LOGIN_USER = "LOGIN_USER";
export const GET_USERS = "GET_USERS";
export const SET_ERRORS = "SET_ERRORS";
export const ALL_CATEGORIES = "ALL_CATEGORIES";
/*

const getCategories = () =>{
    async (dispatch) => {
        const response = await axios("url");
        return dispatch({ type: GET_CATEGORIES, payload: response.data })
    }
}   */

export const toggleLoading = (payload: boolean) => ({type: TOGGLE_LOADING, payload})
export const toggleMainItemRender = payload => ({type: TOGGLE_ITEM_MAIN_RENDER, payload})
//Get categories
export const getCategories = () => {
  return async (dispatch) => {
    const response = await axios("https://tomate-server.onrender.com/categories");
    return dispatch({type: GET_CATEGORIES, payload: response.data})
  }
}
// Delete categories
export const deleteCategorie = id => async dispatch => {
  alert(id)
  try {
    const response = await axios.delete(`https://tomate-server.onrender.com/categories${id}`)
    console.log(response.data)
  } catch (error) {
    console.log(error.data)
  }
}

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
// Get Users
export const getUsers = () =>{
  async (dispatch) => {
      const response = await axios("https://tomate-server.onrender.com/users");
      return dispatch({ type: GET_CATEGORIES, payload: response.data })
  }
}
export const setErrors = (error) => ({type: SET_ERRORS, payload: error})


/*
ACTIONS POST EXAMPLE
export const postActivity = (activity) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3001/activities/create", activity);
    alert("Actividad creada con éxito");
  } catch (error) {
    alert(error.response?.data?.error || "Hubo un error al crear la actividad");
  }
};
*/

