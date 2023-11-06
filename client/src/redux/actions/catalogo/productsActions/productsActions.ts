import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST"; // PÉNDIENTE PARA ASINCRONIA DE PRODUCTOS




export const getProducts = () => {
    return async (dispatch) => {
      dispatch({ type: GET_PRODUCTS_REQUEST }); // PENDIENTE PARA MANEJAR ASINCRONIAS EN PRODUCTOS
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
  