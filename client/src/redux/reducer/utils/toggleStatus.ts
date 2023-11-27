export function toggleStatus(state, object) {
  const newValue = object.status;
  const objectCode = object.code;

  // Aca continuamos con la logica
  const statusToggle = state.findIndex((item: any) => item.code === objectCode);
  /* 
  if (!statusToggle) {
    const toggleCode = 
  } */

  if (statusToggle !== -1) {
    const objectModify = { ...state[statusToggle] };

    objectModify.status = newValue;

    const newArray = state;
    newArray[statusToggle] = objectModify;
    return newArray;
  } else {
    throw new Error('Algo fallo');
  }
}
