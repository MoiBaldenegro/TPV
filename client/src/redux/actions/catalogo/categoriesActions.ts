import axios from "axios";

export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const SEARCH_CATEGORIES = "SEARCH_CATEGORIES";

// Create Categories
export const createCategory = category => async dispatch => {
    alert(category);
    try {
      const response = await axios.post("https://tomate-server.onrender.com/categories", category)
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
  