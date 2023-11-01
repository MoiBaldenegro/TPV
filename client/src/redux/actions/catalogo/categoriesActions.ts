import axios from "axios";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const SEARCH_CATEGORIES = "SEARCH_CATEGORIES";
export const UPLOAD_CATEGORIES = "UPLOAD_CATRGORIES";

export const searchCategories = payload => ({type: SEARCH_CATEGORIES, payload })

// Create Categories
export const createCategory = category => async dispatch => {
  try {
    if(Array.isArray(category)){
      const res = await axios.post('https://tomate-server.onrender.com/categories', category);
      if(!res.data){
        throw new Error("Ha ocurrido algo inesperado, la respuesta no contiene datos")
      }
      alert('Archivo subido con éxito.');
    } else {
      const response = await axios.post("https://tomate-server.onrender.com/categories", category);
      if(!response.data){
        throw new Error("Ha ocurrido algo inesperado, la respuesta no contiene datos")
      }
      alert('categoria creada con éxito.');
    } 
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('La solicitud fue cancelada:', error);
    } else if (error.response && error.response.status === 409) {
      console.error('Error de conflicto:', error);
      alert('Esta categoria ya existe');
    } else {
      alert("Ha ocurrido algo inesperado, y no se ha podido enviar la informacion");
      console.log(error);
    }
  }
  /*
    if (Array.isArray(category)) {
      
       
       
      
        console.error('Error al enviar los datos al servidor:', error);
        alert('Error al enviar los datos al servidor.');
        return;
      }
    } else {
      try {
        
      } catch (error) {
        alert("Error")
        console.log(error)
        console.error('Error general:', error);
      }
      
    } */
   
    
  
};


//Get categories
export const getCategories = () => {
    return async (dispatch) => {
      const response = await axios("https://tomate-server.onrender.com/categories");
      return dispatch({type: GET_CATEGORIES, payload: response.data})
    }

  } 


  
  