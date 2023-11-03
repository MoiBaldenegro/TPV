import axios from 'axios';

export const CREATE_DISHES_REQUEST = 'CREATE_DISHES_REQUEST';

export const createCategory = (dishes) => async (dispatch) => {
  dispatch({ type: CREATE_DISHES_REQUEST });
  try {
    if (Array.isArray(dishes)) {
      const res = await axios.post(
        'https://tomate-server.onrender.com/dishes',
        dishes,
      );
      if (!res.data) {
        throw new Error(
          'Ha ocurrido algo inesperado, la respuesta no contiene datos',
        );
      }
      if (res.status === 409) {
        throw new Error('Esta categoria ya se encuentra listada');
      }
      dispatch({ type: UPLOAD_FILE_SUCCESS });
    } else {
      const response = await axios.post(
        'https://tomate-server.onrender.com/categories',
        category,
      );
      if (!response.data) {
        throw new Error(
          'Ha ocurrido algo inesperado, la respuesta no contiene datos',
        );
      }
      alert('categoria creada con éxito.');
    }
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('La solicitud fue cancelada:', error);
    } else if (error.response && error.response.status === 409) {
      console.error('Error de conflicto:', error);
      alert('Esta categoria ya existe');
    }
    alert(
      'Ha ocurrido algo inesperado, y no se ha podido enviar la informacion',
    );
    console.error(error);
    dispatch({ type: GET_CATEGORIES_FAILURE, error: 'Error en la solicitud' });
  }
};
