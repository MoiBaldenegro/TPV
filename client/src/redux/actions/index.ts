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
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const SEARCH_CATEGORIES = "SEARCH_CATEGORIES"
export const CREATE_CATEGORY = "CREATE_CATEGORY"
/*

const getCategories = () =>{
    async (dispatch) => {
        const response = await axios("url");
        return dispatch({ type: GET_CATEGORIES, payload: response.data })
    }
}   */
export const toggleLoading = (payload: boolean) => ({type: TOGGLE_LOADING, payload})
export const toggleMainItemRender = payload => ({type: TOGGLE_ITEM_MAIN_RENDER, payload})
// Create Categories
export const createCategory = category => async dispatch => {
  alert(category);
  try {
    const response = await axios.post("https://tomate-server.onrender.com/categories")
    if(response.data){
      return dispatch({type: CREATE_CATEGORY, payload: response.data})
    }
  } catch (error) {
    console.error(error)
  }
}


//Get categories
export const getCategories = () => {
  return async (dispatch) => {
    const response = await axios("https://tomate-server.onrender.com/categories");
    return dispatch({type: GET_CATEGORIES, payload: response.data})
  }
} 

export const searchCategories = payload => ({type: SEARCH_CATEGORIES, payload })
/* 
// Delete categories 
export const deleteCategorie = id => async dispatch => {
  try {
    const response = await axios.delete(`https://tomate-server.onrender.com/categories/${id}`);
    if (response.status === 204) {
      alert("Categoría eliminada con éxito");
      return dispatch({type: DELETE_CATEGORY, payload: id})
    } else {
      console.log(`El servidor respondió con un código de estado ${response.status}`);
    }
  } catch (error) {
    console.log("Error al eliminar la categoría:", error);
  }
};
*/

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

