import axios from 'axios';

import {
  PROFILES_FAILURE,
  PROFILES_REQUEST,
  SAVE_PROFILES,
} from './actionTypes';

export const createProfileAction = (profile: any) => async (dispatch: any) => {
  dispatch({ type: PROFILES_REQUEST });
  try {
    const response = await axios.post(
      'https://tomate-server.onrender.com/profiles',
      profile,
    );
    if (!response.data) {
      throw new Error(
        'Ha ocurrido algo inesperado, la respuesta no contiene datos',
      );
    }
    dispatch({ type: SAVE_PROFILES });
  } catch (error: any) {
    if (axios.isCancel(error)) {
      dispatch({
        type: PROFILES_FAILURE,
        error: 'Solicitud cancelada',
      });
      throw new Error(`La solicitud fue cancelada: ${error}`);
    } else if (error.response && error.response.status === 409) {
      dispatch({
        type: PROFILES_FAILURE,
        error: 'Se han encontrado complementos duplicados',
      });
      throw new Error('Este complemento ya se encuentra listado');
    }
    alert(
      'Ha ocurrido algo inesperado, y no se ha podido enviar la informacion',
    );

    dispatch({ type: PROFILES_FAILURE, error: 'Error en la solicitud' });
    throw new Error(error);
  }
};
