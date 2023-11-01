import axios from "axios";

export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const SEARCH_CATEGORIES = "SEARCH_CATEGORIES";
export const UPLOAD_CATEGORIES = "UPLOAD_CATRGORIES";

export const searchCategories = payload => ({type: SEARCH_CATEGORIES, payload })

// Create Categories
export const createCategory = category => async dispatch => {
  console.log("me ejecute debuguin")
  try {
    if (Array.isArray(category)) {
      console.log("entre aca")
      try {
        await axios.post('https://tomate-server.onrender.com/categories', category);
        alert('Archivo subido con éxito.');
        return;
      } catch (error) {
        console.error('Error al enviar los datos al servidor:', error);
        alert('Error al enviar los datos al servidor.');
        return;
      }
    } else {
      const response = await axios.post("https://tomate-server.onrender.com/categories", category);
      if (response.data) {
        return dispatch({ type: CREATE_CATEGORY, payload: response.data });
      }
    }
  } catch (error) {
    console.error('Error general:', error);
  }
};


//Get categories
export const getCategories = () => {
    return async (dispatch) => {
      const response = await axios("https://tomate-server.onrender.com/categories");
      return dispatch({type: GET_CATEGORIES, payload: response.data})
    }

  } 


  
  