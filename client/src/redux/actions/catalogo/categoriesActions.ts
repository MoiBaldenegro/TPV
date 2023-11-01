import axios from "axios";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const SEARCH_CATEGORIES = "SEARCH_CATEGORIES";
export const UPLOAD_CATEGORIES = "UPLOAD_CATRGORIES";

export const searchCategories = payload => ({type: SEARCH_CATEGORIES, payload })

// Create Categories
export const createCategory = category => async dispatch => {
  try {
    if (Array.isArray(category)) {
      const res = await axios.post('https://tomate-server.onrender.com/categories', category);
      if (!res.data) {
        throw new Error("La respuesta no contiene datos");
      }
      alert('Archivo subido con éxito.');
    } else {
      const response = await axios.post("https://tomate-server.onrender.com/categories", category);
      if (!response.data) {
        throw new Error("La respuesta no contiene datos");
      }
      alert('Categoría creada con éxito.');
      return response;
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Ha ocurrido un error al procesar la solicitud.');
  }
};

    
  
};


//Get categories
export const getCategories = () => {
    return async (dispatch) => {
      const response = await axios("https://tomate-server.onrender.com/categories");
      return dispatch({type: GET_CATEGORIES, payload: response.data})
    }

  } 


  
  