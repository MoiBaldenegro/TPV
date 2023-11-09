import axios from 'axios';
import {
  DELETE_MODIFIERS,
  MODIFIERS_FAILURE,
  MODIFIERS_REQUEST,
} from './actionTypes';

export function deleteModifiersAction(id) {
  return async (dispatch) => {
    dispatch({ type: MODIFIERS_REQUEST });
    try {
      const deletedModifier = await axios.delete(
        `https://tomate-server.onrender.com/modifications/${id}`,
      );
      if (deletedModifier.status === 204) {
        dispatch({ type: DELETE_MODIFIERS });
      }
      dispatch({
        type: MODIFIERS_FAILURE,
        error: 'Ha ocurrido algo inesperado, no se elimino el elemento',
      });
      throw new Error('Ha ocurrido algo inesperado');
    } catch (error) {
      dispatch({
        type: MODIFIERS_FAILURE,
        error: 'Hubo un error al eliminar el elemento',
      });
      throw new Error('No se pudo eliminar el modificador');
    }
  };
}
