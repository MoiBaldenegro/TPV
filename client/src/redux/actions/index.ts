import axios from "axios"

export const GET_CATEGORIES = "GET_CATEGORIES";
export const TOGGLE_MAIN_RENDER = "TOGGLE_MAIN_RENDER";
export const TOGGLE_ITEM_MAIN_RENDER = "TOGGLE_ITEM_MAIN_RENDER";
export const CREATE_USER = "CREATE_USER;";
export const LOGIN_USER = "LOGIN_USER";
/*

const getCategories = () =>{
    async (dispatch) => {
        const response = await axios("url");
        return dispatch({ type: GET_CATEGORIES, payload: response.data })
    }
}   */

export const toggleMainRender = payload => ({type: TOGGLE_MAIN_RENDER, payload})
export const toggleMainItemRender = payload => ({type: TOGGLE_ITEM_MAIN_RENDER, payload})

export const createUser = user =>  async dispatch => {
    try {
        const response = await axios.post("http://localhost:8000/auth/register", user)
        alert(`El usuario con el correo ${user.email} ha sido creado con exito`)  
    } catch (error) {
        alert(error.response?.data?.error || "Hubo un error al crear el usuario");
    }
}

export const loginUser = user =>  async dispatch => {
  try {
      const response = await axios.post("http://localhost:8000/auth/login", user)
      if(!response.data.email){
        alert("El usuario y/o contraseña son incorrectos")
      }
      return dispatch({ type: LOGIN_USER, payload: response.data})
  } catch (error) {
      alert(error.response?.data?.error || "Invalid credentials");
  }
}


   


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

