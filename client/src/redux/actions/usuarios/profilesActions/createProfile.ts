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
      dispatch({
        type: PROFILES_FAILURE,
      });
      throw new Error(
        'Ha ocurrido algo inesperado, la respuesta no contiene datos',
      );
    }
    dispatch({ type: SAVE_PROFILES });
    return response;
  } catch (error: any) {
    dispatch({ type: PROFILES_FAILURE });
    throw new Error(error);
  }
};
