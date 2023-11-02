import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";




export const getProducts = () => {
    return async (dispatch) => {
      try {
        const response = await axios("https://tomate-server.onrender.com/products");
        if (response.status === 200) {
          return dispatch({ type: GET_PRODUCTS, payload: response.data });
        } else {
          console.error("Respuesta inesperada del servidor");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };
  };
  