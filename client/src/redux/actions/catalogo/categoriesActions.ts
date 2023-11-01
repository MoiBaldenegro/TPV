import axios from "axios";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const SEARCH_CATEGORIES = "SEARCH_CATEGORIES";
export const UPLOAD_CATEGORIES = "UPLOAD_CATRGORIES";

export const searchCategories = payload => ({type: SEARCH_CATEGORIES, payload })

// Create Categories
export const createCategory = category => async dispatch => {
    if (Array.isArray(category)) {
      try {
        const res = await axios.post('https://tomate-server.onrender.com/categories', category);
        if(!res){
          throw new Error("Ha ocurrido algo inesperado")
        }
        alert('Archivo subido con éxito.');
        return;
      } catch (error) {
        console.error('Error al enviar los datos al servidor:', error);
        alert('Error al enviar los datos al servidor.');
        return;
      }
    } else {
      try {
        const response = await axios.post("https://tomate-server.onrender.com/categories", category);
        return response;
      } catch (error) {
        console.log(error)
        console.error('Error general:', error);
      }
      
    }
   
    
  
};


//Get categories
export const getCategories = () => {
    return async (dispatch) => {
      const response = await axios("https://tomate-server.onrender.com/categories");
      return dispatch({type: GET_CATEGORIES, payload: response.data})
    }

  } 


  
  