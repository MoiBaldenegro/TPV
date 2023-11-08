export function toggleStatus(state, object) {
  const newValue = object.status;
  const objectId = object._id;
  console.log(`payload: ${objectId}`);
  console.log(`payloadStatus: ${newValue}`);

  const statusToggle = state.findIndex((item: any) => item._id === objectId);

  if (statusToggle !== -1) {
    const objectModify = { ...state[statusToggle] };

    objectModify.status = newValue;

    const newArray = state;
    newArray[statusToggle] = objectModify;
    console.log(newArray);
    return newArray;
  } else {
    throw new Error('Algo fallo');
  }
}
