import axios from "axios";

export const GET_CATEGORIES_SUCESS = "GET_CATEGORIES_SUCESS";
export const SEARCH_CATEGORIES = "SEARCH_CATEGORIES";
export const UPLOAD_CATEGORIES = "UPLOAD_CATRGORIES";
export const GET_CATEGORIES_REQUEST = "GET_CATEGORIES_REQUEST";
export const GET_CATEGORIES_FAILURE = "GET_CATEGORIES_FAILURE";
export const UPLOAD_FILE_SUCCESS = "UPLOAD_FILE_SUCCESS";

export const searchCategories = payload => ({type: SEARCH_CATEGORIES, payload })

// Create Categories
export const createCategory = category => async dispatch => {
  dispatch({ type: GET_CATEGORIES_REQUEST });
  try {
    if(Array.isArray(category)){
      const res = await axios.post('https://tomate-server.onrender.com/categories', category);
      if(!res.data){
        throw new Error("Ha ocurrido algo inesperado, la respuesta no contiene datos")
      }
      if(res.status === 409){
        throw new Error("Esta categoria ya se encuentra listada");
      }
      alert('Archivo subido con éxito.');
      dispatch({type: UPLOAD_FILE_SUCCESS})
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
};

//Get categories
export const getCategories = () => {
    return async (dispatch) => {
      dispatch({ type: GET_CATEGORIES_REQUEST }); // Enviamos la peticion al servidor
      try {
        const response = await axios("https://tomate-server.onrender.com/categories");
        if(response.status === 200){
         
            dispatch({ type: GET_CATEGORIES_SUCESS, payload: response.data });
          
        } else {
          dispatch({ type: GET_CATEGORIES_FAILURE, error: "Respuesta inesperada del servidor" });
        }
      } catch (error) {
        dispatch({ type: GET_CATEGORIES_FAILURE, error: "Error en la solicitud" });
      }
     
    }

  } 


  
  